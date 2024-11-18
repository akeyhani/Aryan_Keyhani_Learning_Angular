import { Component, OnInit } from '@angular/core';
import { Games } from '../Games';
import { GameService } from '../Services/game.service';
import { CommonModule, DatePipe, UpperCasePipe, TitleCasePipe } from '@angular/common';
import { GameListItemComponent } from '../game-list-item/game-list-item.component';
import {RatingColorPipe} from "../Shared/rating-color.pipe";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  standalone: true,
  imports: [RatingColorPipe, CommonModule, DatePipe, UpperCasePipe, TitleCasePipe],
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];
  errorMessage: string | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  private loadGames(): void {
    this.gameService.getAllGames().subscribe({
      next: (games) => {
        this.gameList = games;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error("Error fetching games", err);
        this.errorMessage = "Failed to load games. Please try again later.";
      }
    });
  }
}
