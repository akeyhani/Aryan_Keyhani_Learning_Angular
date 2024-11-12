import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../Games';
import { GameService } from '../Services/game.service';
import { CustomValidators } from '../Shared/custom-validators';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './modify-list-item.component.html',
})
export class ModifyListItemComponent implements OnInit {
  gameForm!: FormGroup;  // Form group for managing game details
  isEditMode: boolean = false;
  selectedGame?: Games;
  gameList: Games[] = [];  // To hold all games for validation
  error: string | null = null;  // Error handling

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load games to pass to custom validators
    this.gameService.getAllGames().subscribe({
      next: (games) => {
        this.gameList = games;
        this.initializeForm();  // Initialize form after fetching game data
      },
      error: err => {
        console.error('Error loading games', err);
        this.error = 'Failed to load game data for validation';
      }
    });

    // Check query params for edit mode
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadGameForEdit(+id);  // Load existing game data for editing
      }
    });
  }

  // Initialize the form with custom validators
  initializeForm(): void {
    this.gameForm = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          CustomValidators.positiveNumber(),
          CustomValidators.uniqueGame(this.gameList, 'id')
        ]
      ],
      title: [
        '',
        [
          Validators.required,
          CustomValidators.noSpecialChars(),
          CustomValidators.uniqueGame(this.gameList, 'title')
        ]
      ],
      genre: ['', Validators.required],
      developer: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      URL: ['', Validators.required]
    });
  }

  // Load game by ID to edit
  loadGameForEdit(id: number): void {
    this.gameService.getGameById(id).subscribe({
      next: (game) => {
        if (game) {
          this.selectedGame = game;
          this.gameForm.patchValue(game);  // Populate form with game data
        } else {
          console.error('Game not found');
          this.error = 'Game not found';
        }
      },
      error: err => {
        console.error('Error loading game', err);
        this.error = 'Failed to load game data';
      }
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.gameForm.valid) {
      const gameData = this.gameForm.value as Games;
      this.isEditMode ? this.updateGame(gameData) : this.addGame(gameData);
    } else {
      console.log('Form is invalid');
    }
  }

  // Add a new game
  addGame(game: Games): void {
    game.id = this.gameService.generateNewId();
    this.gameService.addGame(game).subscribe({
      next: () => {
        console.log('Game added:', game);
        this.navigateToGameList();
      },
      error: err => {
        console.error('Error adding game', err);
        this.error = 'Failed to add game';
      }
    });
  }

  // Update an existing game
  updateGame(game: Games): void {
    if (this.selectedGame) {
      game.id = this.selectedGame.id;
      this.gameService.updateGame(game).subscribe({
        next: () => {
          console.log('Game updated:', game);
          this.navigateToGameList();
        },
        error: err => {
          console.error('Error updating game', err);
          this.error = 'Failed to update game';
        }
      });
    }
  }

  // Delete the currently selected game
  onDelete(): void {
    const id = this.gameForm.value.id;
    if (id) {
      this.gameService.removeGameById(id).subscribe({
        next: () => {
          console.log(`Game with ID ${id} deleted`);
          this.navigateToGameList();
        },
        error: err => {
          console.error('Error deleting game', err);
          this.error = 'Failed to delete game';
        }
      });
    }
  }

  // Reset form to default state
  resetForm(): void {
    this.gameForm.reset();
    this.isEditMode = false;
    this.selectedGame = undefined;
  }

  // Navigate back to the game list
  navigateToGameList(): void {
    this.router.navigate(['/game-list']);
  }
}
