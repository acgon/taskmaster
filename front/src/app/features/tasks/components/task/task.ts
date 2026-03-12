import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../../data/models/task.model';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-task',
  imports: [MatTooltipModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;
  @Output() delete = new EventEmitter<number>();

  executarAcao() {
    alert("Está funcionando.");
  }

  avancarTarefa() {
    if (this.task.status == 'todo') this.task.status = 'doing';
    else if (this.task.status == 'doing') this.task.status = 'done';
    console.dir(this.task.status);
  }

  apagarTarefa() {
    this.delete.emit(this.task.id);
  }
}
