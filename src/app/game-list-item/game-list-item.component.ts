import { Component, Input } from '@angular/core';
import { Games } from '../Games';

@Component({
  selector: 'app-game-list-item',
  template: `
    <div class="content-item">
      <h2>{{ gameItem?.id }}</h2>
      <h2>{{ gameItem?.title }}</h2>
      <p>Genre: {{ gameItem?.genre }}</p>
      <p>Developer: {{ gameItem?.developer }}</p>
      <p>Release Date: {{ gameItem?.releaseDate }}</p>
      <p>Rating: {{ gameItem?.rating }}</p>
    </div>
  `,
  standalone: true,
  styleUrls: ['./game-list-item.component.css'] // Changed to styleUrls
})
export class GameListItemComponent {
  @Input() gameItem?: Games; // Optional chaining used to avoid undefined errors
}
