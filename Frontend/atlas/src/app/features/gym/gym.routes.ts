import { Routes } from '@angular/router';

export const GYM_ROUTES: Routes = [
    {
        path: 'workout',
        loadComponent: () =>
            import('./pages/workout/workout-component')
                .then(c => c.WorkoutComponent)
    },
    {
        path: 'progress',
        loadComponent: () =>
            import('./pages/progress/progress-component')
                .then(c => c.ProgressComponent)
    },
    {
        path: 'workout-history',
        loadComponent: () =>
            import('./pages/workout-history/workout-history-component')
                .then(c => c.WorkoutHistoryComponent)
    }
];