import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { GameService } from './game.service';
import { Games } from './Games';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListItemComponent, GameListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, my name is Aryan';
  date = new Date().toLocaleDateString();

  gameList: Games[] = [];
  singleGameItem?: Games;  // Optional to handle case where the game might not be found

  constructor(private gameService: GameService) {
    this.loadGames();
    this.getGameById(2);  // Change the ID to whatever you want to retrieve
  }

  loadGames(): void {
    this.gameService.getAllGames().subscribe(games => {
      this.gameList = games;
    });
  }

  getGameById(id: number): void {
    this.gameService.getGameById(id).subscribe(game => {
      this.singleGameItem = game;  // Set the retrieved game to singleGameItem
    });
  }
}
