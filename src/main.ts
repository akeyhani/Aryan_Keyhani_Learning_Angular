import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { GameListComponent } from './app/game-list/game-list.component';  // Correct path for GameListComponent
import { GameListItemComponent } from './app/game-list-item/game-list-item.component';  // Correct path for GameListItemComponent
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';  // Correct path for ModifyListItemComponent
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';  // Correct path for PageNotFoundComponent

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },  // Redirect to default route
  { path: 'game-list', component: GameListComponent },  // List of games
  { path: 'game-list/:id', component: GameListItemComponent },  // Individual game item (dynamic route)
  { path: 'modify-list-item', component: ModifyListItemComponent },  // Modify list item route
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for 404
];

// Bootstrap the application with the router
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .then(r => console.log('Bootstrap successful'))
  .catch(err => console.error(err));
