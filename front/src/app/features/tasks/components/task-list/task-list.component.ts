import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskStatus } from '../../data/models/task-status.type';
import { TaskModel } from '../../data/models/task.model';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, CdkDropList, CdkDrag],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  @Input() status!: TaskStatus;
  @Input() tasks: TaskModel[] = [];

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
