import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../Games';
import { GameService } from '../game.service';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  modifyForm!: FormGroup;  // Ensure modifyForm is defined with FormGroup type
  isEditMode: boolean = false;
  selectedGame?: Games;
  gameList: Games[] = [];

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load the game list for uniqueness validation
    this.gameService.getAllGames().subscribe((games: Games[]) => {
      this.gameList = games;
    });

    // Initialize the form with custom validators
    this.modifyForm = this.fb.group({
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

    // Check for query params to determine if we're in edit mode
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        // If an ID is present, load the game for editing
        this.gameService.getGameById(+id).subscribe(game => {
          if (game) {
            this.selectedGame = game;
            this.isEditMode = true;
            this.modifyForm.patchValue(game);  // Populate form with game data
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.modifyForm.valid) {
      const gameData = this.modifyForm.value as Games;

      if (this.isEditMode && this.selectedGame) {
        gameData.id = this.selectedGame.id;
        this.gameService.updateGame(gameData).subscribe(() => {
          console.log('Game updated:', gameData);
          this.resetForm();
          this.router.navigate(['/game-list']);
        });
      } else {
        this.gameService.addGame(gameData).subscribe(() => {
          console.log('Game added:', gameData);
          this.resetForm();
          this.router.navigate(['/game-list']);
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.modifyForm.reset();
    this.isEditMode = false;
    this.selectedGame = undefined;
  }
}
