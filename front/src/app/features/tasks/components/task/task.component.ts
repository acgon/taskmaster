import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../../data/models/task.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-task',
  imports: [MatTooltipModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskModel;
  @Output() delete = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

  avancarTarefa() {
    if (this.task.status == 'todo') this.task.status = 'doing';
    else if (this.task.status == 'doing') this.task.status = 'done';
    console.dir(this.task.status);
  }

  editarTarefa() {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      panelClass: 'edit-task-dialog',
      data: {...this.task}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) Object.assign(this.task, result);
    });
  }

  apagarTarefa() {
    this.delete.emit(this.task.id);
  }
}
