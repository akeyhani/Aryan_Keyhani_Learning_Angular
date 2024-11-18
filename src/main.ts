import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { GameListComponent } from './app/game-list/game-list.component';
import { GameListItemComponent } from './app/game-list-item/game-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/Services/in-memory-data.service';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },  // Redirect to default route
  { path: 'game-list', component: GameListComponent },  // List of games
  { path: 'game-list/:id', component: GameListItemComponent },  // Individual game item (dynamic route)
  { path: 'modify-list-item', component: ModifyListItemComponent },  // Modify list item route
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for 404
];

// Bootstrap the application with the router and in-memory API
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })  // Simulate backend
    )
  ]
})
  .then(() => console.log('Bootstrap successful'))
  .catch(err => console.error(err));
