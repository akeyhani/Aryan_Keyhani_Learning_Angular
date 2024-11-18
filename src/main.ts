import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/Services/in-memory-data.service';

// Define the routes with lazy loading
const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' }, // Redirect to default route
  {
    path: 'game-list',
    loadComponent: () =>
      import('./app/game-list/game-list.component').then((m) => m.GameListComponent),
  },
  {
    path: 'game-list/:id',
    loadComponent: () =>
      import('./app/game-list-item/game-list-item.component').then(
        (m) => m.GameListItemComponent
      ),
  },
  {
    path: 'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(
        (m) => m.ModifyListItemComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];

// Bootstrap the application with the router and in-memory API
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }) // Simulate backend
    ),
  ],
})
  .then(() => console.log('Bootstrap successful'))
  .catch((err) => console.error(err));
