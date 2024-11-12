/*import { Games } from '../../Games';

export class GameListComponent {
  // Define game items
  game1: Games = {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    developer: 'Nintendo',
    releaseDate: 'March 3, 2017',
    rating: '10/10',
    URL: ''
  };
  game2: Games = {
    id: 2,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    developer: 'CD Projekt Red',
    releaseDate: 'December 10, 2020',
    rating: '7/10',
    URL: ''
  };
  game3: Games = {
    id: 3,
    title: 'God of War',
    genre: 'Action-adventure',
    developer: 'Santa Monica Studio',
    releaseDate: 'April 20, 2018',
    rating: '9.5/10',
    URL: ''
  };
  game4: Games = {
    id: 4,
    title: 'Minecraft',
    genre: 'Sandbox, Survival',
    developer: 'Mojang Studios',
    releaseDate: 'November 18, 2011',
    rating: '9/10',
    URL: ''
  };
}
*/
import { Games } from '../../Games';

export const gameList: Games[] = [
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    developer: 'Nintendo',
    releaseDate: 'March 3, 2017',
    rating: '10/10',
    URL: 'https://example.com/zelda.jpg'
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    developer: 'CD Projekt Red',
    releaseDate: 'December 10, 2020',
    rating: '7/10',
    URL: 'https://example.com/cyberpunk.jpg'
  },
  {
    id: 3,
    title: 'God of War',
    genre: 'Action-adventure',
    developer: 'Santa Monica Studio',
    releaseDate: 'April 20, 2018',
    rating: '9.5/10',
    URL: 'https://example.com/godofwar.jpg'
  },
  {
    id: 4,
    title: 'Minecraft',
    genre: 'Sandbox, Survival',
    developer: 'Mojang Studios',
    releaseDate: 'November 18, 2011',
    rating: '9/10',
    URL: 'https://example.com/minecraft.jpg'
  }
];
