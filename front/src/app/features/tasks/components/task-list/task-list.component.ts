import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskStatus } from '../../data/models/task-status.type';
import { TaskModel } from '../../data/models/task.model';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../task/edit-task/edit-task.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, CdkDropList, CdkDrag],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  @Input() status!: TaskStatus;
  @Input() tasks: TaskModel[] = [];

  constructor(private dialog: MatDialog) {}

  apagarTarefa(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onDrop(event: CdkDragDrop<TaskModel[]>) {
    const task = event.item.data;

    task.status = this.status;

    const tarefasMesmaColuna = this.filteredTasks;
    const estadoAnterior = tarefasMesmaColuna.findIndex(t => t.id === task.id);
    if (estadoAnterior > -1) tarefasMesmaColuna.splice(estadoAnterior, 1);
    tarefasMesmaColuna.splice(event.currentIndex, 0, task);

    tarefasMesmaColuna.forEach((t, index) => {t.order = index; });
  }

  criarTarefa(status: TaskStatus) {
    let novaTarefa: TaskModel = {
      id: this.tasks.length,
      title: 'Nova tarefa',
      description: 'Descrição...',
      status: this.status,
      order: -1
    }

    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: novaTarefa
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title) {
        setTimeout(() => {
          this.tasks.push(novaTarefa);
        })
      }
    });
  }

  get titulo() {
    switch (this.status) {
      case 'todo': return 'A fazer';
      case 'doing': return 'Fazendo';
      case 'done': return 'Feito';
    }
  }

  get filteredTasks() {
    return this.tasks
    .filter(task => task.status === this.status)
    .sort((a, b) => a.order - b.order);
  }
}
