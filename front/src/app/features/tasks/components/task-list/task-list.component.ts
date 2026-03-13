import { Component } from '@angular/core';
import { TASKS_MOCK } from '../../data/mocks/tasks.mock';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  tasks = TASKS_MOCK;

  apagarTarefa(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
