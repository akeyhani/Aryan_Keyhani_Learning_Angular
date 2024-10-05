import { Games } from '../../Games';

export class GameListComponent {
  // Define game items
  game1: Games = {
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    developer: 'Nintendo',
    releaseDate: 'March 3, 2017',
    rating: '10/10'
  };
  game2: Games = {
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    developer: 'CD Projekt Red',
    releaseDate: 'December 10, 2020',
    rating: '7/10'
  };
  game3: Games = {
    title: 'God of War',
    genre: 'Action-adventure',
    developer: 'Santa Monica Studio',
    releaseDate: 'April 20, 2018',
    rating: '9.5/10'
  };
  game4: Games = {
    title: 'Minecraft',
    genre: 'Sandbox, Survival',
    developer: 'Mojang Studios',
    releaseDate: 'November 18, 2011',
    rating: '9/10'
  };
}
