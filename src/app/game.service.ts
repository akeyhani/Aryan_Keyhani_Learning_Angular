import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Games } from './Games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // Mock game data
  private games: Games[] = [
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

  // Returns all games as an observable
  getAllGames(): Observable<Games[]> {
    return of(this.games);
  }

  // Retrieves a game by its ID
  getGameById(id: number): Observable<Games | undefined> {
    const game = this.games.find(game => game.id === id);
    return of(game);
  }

  // Adds a new game to the list
  addGame(newGame: Games): Observable<Games[]> {
    // Assign a new unique ID based on the maximum ID in the list
    const maxId = this.games.length > 0 ? Math.max(...this.games.map(g => g.id)) : 0;
    newGame.id = maxId + 1;
    this.games.push(newGame);
    return of(this.games);
  }

  // Updates an existing game by its ID
  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.games.findIndex(game => game.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame;
    } else {
      console.error(`Game with id ${updatedGame.id} not found.`);
    }
    return of(this.games);
  }

  // Removes a game by its ID
  removeGameById(id: number): Observable<Games | undefined> {
    const index = this.games.findIndex(game => game.id === id);
    if (index !== -1) {
      const removedGame = this.games.splice(index, 1)[0];
      return of(removedGame);
    } else {
      console.error(`Game with id ${id} not found.`);
      return of(undefined);
    }
  }
}
