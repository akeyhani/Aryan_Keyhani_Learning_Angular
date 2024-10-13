import { Component, Input } from '@angular/core';
import { Games } from '../Games';  // Make sure you're importing the correct interface

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css'],
  standalone: true
})
export class GameListItemComponent {
  @Input() gameItem?: Games;  // Declare gameItem as an input property of type Games
}
