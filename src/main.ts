// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './app/game-list/game-list.component';
import { GameListItemComponent } from './app/game-list-item/game-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

// Define your routes here
const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },
  { path: 'game-list', component: GameListComponent },
  { path: 'game-list/:id', component: GameListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

// Bootstrap the application with HttpClientModule and routing providers
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)  // Enable HttpClientModule for HTTP requests
  ]
})
  .catch(err => console.error(err));
