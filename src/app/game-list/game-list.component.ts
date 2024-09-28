import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class ContentListComponent {
  gameList = [
    {title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure', developer: 'Nintendo', releaseDate: 'March 3, 2017', rating: '10/10'},
    {title: 'Cyberpunk 2077', genre: 'RPG', developer: 'CD Projekt Red', releaseDate: 'December 10, 2020', rating: '7/10'},
    {title: 'God of War', genre: 'Action-adventure', developer: 'Santa Monica Studio', releaseDate: 'April 20, 2018', rating: '9.5/10'},
    {title: 'Minecraft', genre: 'Sandbox, Survival', developer: 'Mojang Studios', releaseDate: 'November 18, 2011', rating: '9/10'}
  ];
}
