import { Component } from '@angular/core';
import { TASKS_MOCK } from '../task/data/tasks.mock';
import { Task } from "../task/task";

@Component({
  selector: 'app-task-list',
  imports: [Task],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks = TASKS_MOCK;
}
