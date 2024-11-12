import { Component, OnInit } from '@angular/core';
import { Games } from '../Games';
import { GameService } from '../Services/game.service';
import { CommonModule } from '@angular/common';
import { GameListItemComponent } from '../game-list-item/game-list-item.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  standalone: true,
  imports: [GameListItemComponent, CommonModule],
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];  // Array to store list of games

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  // Method to load games from the service
  private loadGames(): void {
    this.gameService.getAllGames().subscribe({
      next: (games: Games[]) => this.gameList = games,
      error: err => console.error("Error fetching games", err),
      complete: () => console.log("Game data fetch complete!")
    });
  }
}
