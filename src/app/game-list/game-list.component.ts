import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../Games';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { GameListItemComponent } from '../game-list-item/game-list-item.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameListItemComponent],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];  // List of games
  selectedGame?: Games;    // The selected game for viewing/editing

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    // Fetch all games from the service when the component initializes
    this.loadGames();
  }

  // Method to load games from the service
  private loadGames(): void {
    this.gameService.getAllGames().subscribe(
      (games: Games[]) => {
        this.gameList = games;
      },
      (error) => {
        console.error('Error fetching game data', error);
      }
    );
  }

  // Method to handle game selection for viewing
  selectGame(game: Games): void {
    this.selectedGame = game;
  }

  // Method to navigate to the form to edit a game
  editGame(game: Games): void {
    this.router.navigate(['/modify-list-item'], { queryParams: { id: game.id } });
  }

  // Method to delete a game by ID
  deleteGame(id: number): void {
    this.gameService.removeGameById(id).subscribe({
      next: () => {
        // Refresh the game list after deletion
        this.loadGames();
      },
      error: err => console.error("Error deleting game", err)
    });
  }
}
