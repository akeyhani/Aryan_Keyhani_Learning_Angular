import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation
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
  selectedGame?: Games;    // The selected game

  constructor(private gameService: GameService, private router: Router) {}  // Inject Router

  ngOnInit(): void {
    // Fetch all games from the service when the component initializes
    this.gameService.getAllGames().subscribe(
      (games: Games[]) => {
        this.gameList = games;
      },
      (error) => {
        console.error('Error fetching game data', error);
      }
    );
  }

  // Method to handle game selection
  selectGame(game: Games): void {
    this.selectedGame = game;  // Set the selected game
  }

  // Method to edit a game by navigating to the modify form
  editGame(game: Games): void {
    this.router.navigate(['/modify-list-item'], { queryParams: { id: game.id } });
  }

  // Method to delete a game by ID
  deleteGame(id: number): void {
    this.gameService.removeGameById(id).subscribe({
      next: () => {
        // Update the game list after deletion
        this.gameList = this.gameList.filter(game => game.id !== id);
      },
      error: err => console.error("Error deleting game", err)
    });
  }
}
