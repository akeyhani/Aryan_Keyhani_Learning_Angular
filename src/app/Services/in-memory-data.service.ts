import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Games } from '../Games';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): { games: Games[] } {
    const games: Games[] = [
      {
        id: 1,
        title: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Action-adventure',
        developer: 'Nintendo',
        releaseDate: 'March 3, 2017',
        rating: '10/10',
        URL: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Zelda_Logo.svg'
      },
      {
        id: 2,
        title: 'Cyberpunk 2077',
        genre: 'RPG',
        developer: 'CD Projekt Red',
        releaseDate: 'December 10, 2020',
        rating: '7/10',
        URL: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
      },
      {
        id: 3,
        title: 'God of War',
        genre: 'Action-adventure',
        developer: 'Santa Monica Studio',
        releaseDate: 'April 20, 2018',
        rating: '9.5/10',
        URL: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
      },
      {
        id: 4,
        title: 'Minecraft',
        genre: 'Sandbox, Survival',
        developer: 'Mojang Studios',
        releaseDate: 'November 18, 2011',
        rating: '9/10',
        URL: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Minecraft_Wiki_2023_textless.png'
      }
    ];

    return { games };
  }

  // Optional: Override `genId` to ensure that a game always has an ID.
  genId(games: Games[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 1;
  }
}
