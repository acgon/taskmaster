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
  @Input() last!: number;
  @Output() delete = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

  avancarTarefa() {
    if (this.task.status == 'todo') this.task.status = 'doing';
    else if (this.task.status == 'doing') this.task.status = 'done';
    this.task.order = this.last+1;
  }

  editarTarefa() {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      panelClass: 'edit-task-dialog',
      data: {...this.task}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(() => {
          Object.assign(this.task, result);
        })
      } 
    });
  }

  apagarTarefa() {
    const confirmar = confirm("Deseja apagar esta tarefa?");

    if (confirmar) this.delete.emit(this.task.id);
  }
}
