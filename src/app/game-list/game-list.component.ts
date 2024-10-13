import { Component, OnInit } from '@angular/core';
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

  constructor(private gameService: GameService) {}

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
}
