import { Component, OnInit } from '@angular/core';  // Import necessary Angular components
import { Games } from '../Games';  // Import your Games type
import { GameService } from '../game.service';  // Import your GameService
import { CommonModule } from '@angular/common';  // Import CommonModule for ngFor
import { GameListItemComponent } from '../game-list-item/game-list-item.component';  // Import your item component

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameListItemComponent],  // Declare imports here
  templateUrl: './game-list.component.html',  // Link to your HTML template
  styleUrls: ['./game-list.component.css']  // Link to your CSS styles
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];  // Initialize an empty array for games

  constructor(private gameService: GameService) {}  // Inject GameService into the component

  ngOnInit(): void {
    // Subscribe to the observable to retrieve the list of games
    this.gameService.getAllGames().subscribe(
      (games: Games[]) => {
        this.gameList = games;  // Assign the received games to the gameList array
      },
      (error) => {
        console.error('Error fetching game data', error);  // Log any errors
      }
    );
  }
}
