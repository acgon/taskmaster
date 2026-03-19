import { Component } from '@angular/core';
import { TASKS_MOCK } from '../../data/mocks/tasks.mock';
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-task-board',
  imports: [TaskListComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent {
  tasks = TASKS_MOCK;
}
