import { Component, OnInit, Output, EventEmitter } from '@angular/core';  // Add EventEmitter
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
  gameList: Games[] = [];
  @Output() gameSelected = new EventEmitter<Games>();  // Output event to emit selected game

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(
      (games: Games[]) => {
        this.gameList = games;
      },
      (error) => {
        console.error('Error fetching game data', error);
      }
    );
  }

  selectGame(game: Games): void {
    this.gameSelected.emit(game);  // Emit the selected game
  }
}
