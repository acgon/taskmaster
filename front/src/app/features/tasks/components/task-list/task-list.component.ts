import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskStatus } from '../../data/models/task-status.type';
import { TaskModel } from '../../data/models/task.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  @Input() status!: TaskStatus;
  @Input() tasks: TaskModel[] = [];

  apagarTarefa(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  get titulo() {
    switch (this.status) {
      case 'todo': return 'A fazer';
      case 'doing': return 'Fazendo';
      case 'done': return 'Feito';
    }
  }

  get filteredTasks() {
    return this.tasks.filter(task => task.status === this.status);
  }
}
