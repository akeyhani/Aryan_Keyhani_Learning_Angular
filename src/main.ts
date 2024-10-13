import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'modify-item', component: ModifyListItemComponent }, // Modify list item route
  { path: '**', component: PageNotFoundComponent } // Wildcard route for 404 page
];
