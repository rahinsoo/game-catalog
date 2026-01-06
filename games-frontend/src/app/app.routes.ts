import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path:  'games',
    loadChildren: () => import('./features/games/games.routes').then(m => m. GAMES_ROUTES)
  },
  {
    path: 'stats',
    loadChildren:  () => import('./features/stats/stats.routes').then(m => m.STATS_ROUTES)
  },
  {
    path: '**',
    redirectTo: '/games'
  }
];
