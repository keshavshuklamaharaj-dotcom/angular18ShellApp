import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'chalkboard',
          loadComponent: () => import('./board/board.component').then(m => m.BoardComponent)
    },
    {
        path: 'userflow',
        loadComponent: () => import('./board2/board2.component').then(m => m.Board2Component)
    },
];

