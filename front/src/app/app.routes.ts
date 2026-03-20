import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { TaskBoardComponent } from './features/tasks/components/task-board/task-board.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'board',
        component: TaskBoardComponent
    }
];
