import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all games', () => {
    const games = service.getAllGames();
    games.subscribe(data => {
      expect(data.length).toBeGreaterThan(0); // Assuming gameList is not empty
    });
  });

  it('should add a new game', () => {
    const newGame = {
      id: 0,
      title: 'New Game',
      genre: 'Adventure',
      developer: 'Test Developer',
      releaseDate: '2023-01-01',
      rating: '9/10',
      URL: 'https://example.com/newgame.jpg'
    };

    service.addGame(newGame).subscribe(addedGame => {
      expect(addedGame.id).toBeGreaterThan(0);
      expect(addedGame.title).toBe('New Game');
    });
  });

  it('should update an existing game', () => {
    const updatedGame = {
      id: 1, // ID of an existing game
      title: 'Updated Game',
      genre: 'Action',
      developer: 'Updated Developer',
      releaseDate: '2023-02-02',
      rating: '8.5/10',
      URL: 'https://example.com/updatedgame.jpg'
    };

    service.updateGame(updatedGame).subscribe(game => {
      expect(game).toBeDefined();
      expect(game?.title).toBe('Updated Game');
    });
  });

  it('should delete a game by ID', () => {
    const gameId = 1; // ID of an existing game to delete

    service.removeGameById(gameId);
    service.getGameById(gameId).subscribe(game => {
      expect(game).toBeUndefined();
    });
  });

  it('should generate a new unique ID', () => {
    const newId = service.generateNewId();
    expect(newId).toBeGreaterThan(0);
  });
});
