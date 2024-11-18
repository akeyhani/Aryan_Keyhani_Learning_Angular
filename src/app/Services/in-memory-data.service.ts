import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Games } from "../Games";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): { games: Games[] } {
    const games: Games[] = [
      {
        id: 1,
        title: "The Legend of Zelda",
        genre: "Action-Adventure",
        developer: "Nintendo",
        releaseDate: "2017-03-03",
        rating: "10/10",
        URL: "https://example.com/zelda.jpg"
      },
      {
        id: 2,
        title: "Cyberpunk 2077",
        genre: "RPG",
        developer: "CD Projekt Red",
        releaseDate: "2020-12-10",
        rating: "7/10",
        URL: "https://example.com/cyberpunk.jpg"
      },
      {
        id: 3,
        title: "God of War",
        genre: "Action-Adventure",
        developer: "Santa Monica Studio",
        releaseDate: "2018-04-20",
        rating: "9.5/10",
        URL: "https://example.com/godofwar.jpg"
      },
      {
        id: 4,
        title: "Minecraft",
        genre: "Sandbox",
        developer: "Mojang Studios",
        releaseDate: "2011-11-18",
        rating: "9/10",
        URL: "https://example.com/minecraft.jpg"
      }
    ];
    return { games };
  }
}
