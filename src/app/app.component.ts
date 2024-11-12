import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { GameService } from './Services/game.service';
import { Games } from './Games';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListComponent, GameListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello, my name is Aryan';  // Welcome message
  date = new Date().toLocaleDateString();  // Display the current date

  selectedGame: Games | undefined;  // To store the selected game by ID

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getSelectedGame(2);  // Fetch the game with ID 2 on component initialization
  }

  getSelectedGame(id: number): void {
    this.gameService.getGameById(id).subscribe({
      next: (game) => this.selectedGame = game,  // Set the retrieved game to selectedGame
      error: err => console.error("Error fetching game by ID", err)
    });
  }
}
