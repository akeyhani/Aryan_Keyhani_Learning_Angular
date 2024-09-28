import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {game } from './game';  // Use the Game interface
import { NgForOf, NgIf } from "@angular/common";
import { GameListComponent } from './game-list/game-list.component';  // Replace SmiteGodsListComponent with GameListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListComponent],  // Use GameListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, my name is Aryan';  // Change name to Aryan
  date = new Date().toLocaleDateString();  // Use today's date

  // Replace Smite gods with games
  game1: game = { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure', developer: 'Nintendo', releaseDate: 'March 3, 2017', rating: '10/10' };
  game2: game = { title: 'Cyberpunk 2077', genre: 'RPG', developer: 'CD Projekt Red', releaseDate: 'December 10, 2020', rating: '7/10' };
  game3: game = { title: 'God of War', genre: 'Action-adventure', developer: 'Santa Monica Studio', releaseDate: 'April 20, 2018', rating: '9.5/10' };
  game4: game = { title: 'Minecraft', genre: 'Sandbox, Survival', developer: 'Mojang Studios', releaseDate: 'November 18, 2011', rating: '9/10' };

  // Create a list of games
  gameList: game[] = [this.game1, this.game2, this.game3, this.game4];
}
