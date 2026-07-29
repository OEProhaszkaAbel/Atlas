import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(r => r.AUTH_ROUTES)
  },
  {
    path: 'gym',
    loadChildren: () =>
      import('./features/gym/gym.routes')
        .then(r => r.GYM_ROUTES)
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        redirectTo: 'signal-forms',
        pathMatch: 'full',
      },
      {
        path: 'signal-forms',
        loadComponent: () =>
          import('./pages/forms/signal-forms.page').then((m) => m.SignalFormsPage),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/404.page').then((m) => m.NotFoundPage),
  },
];
