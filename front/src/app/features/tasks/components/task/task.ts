import { Component, Input } from '@angular/core';
import { TaskModel } from '../../data/models/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task!: TaskModel;

  @Input({ required: true })

  executarAcao() {
    alert("Está funcionando.");
  }
}
