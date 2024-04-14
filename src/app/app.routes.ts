import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'leaderboards', component: UsersComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
