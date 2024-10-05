import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { Games } from '../Games';
import { GameService } from '../game.service';  // Import the GameService
import { GameListItemComponent } from '../game-list-item/game-list-item.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgClass, NgForOf, GameListItemComponent],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {
  // Store the games in an array
  gameList: Games[] = [];

  // Inject the GameService in the constructor
  constructor(private gameService: GameService) {}

  // Use ngOnInit to fetch the games when the component initializes
  ngOnInit(): void {
    this.gameList = this.gameService.getAllGames();
  }

  // Example method to add a new game (optional)
  addGame(): void {
    const newGame: Games = {
      title: 'New Game',
      genre: 'New Genre',
      developer: 'New Developer',
      releaseDate: '2024',
      rating: '8/10'
    };
    this.gameService.addGame(newGame);
    this.gameList = this.gameService.getAllGames();  // Refresh the game list
  }
}
