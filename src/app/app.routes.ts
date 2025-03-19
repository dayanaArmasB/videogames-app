import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'juegos',
        loadComponent: () => import('./features/game-list/game-list.component').then(m => m.GameListComponent)
    },
    {
        path: 'juegos/:categoria', // 👉 Nueva ruta para filtrar juegos por categoría
        loadComponent: () => import('./features/game-list/game-list.component').then(m => m.GameListComponent)
    },
    {
        path: 'buscar',
        loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent)
    },
    {
        path: 'games/:id', // 👉 Ruta para el detalle del juego
        loadComponent: () => import('./features/game-detail/game-detail.component').then(m => m.GameDetailComponent)
    },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Agregar esta línea
    { path: '**', redirectTo: 'inicio' }
    
];

