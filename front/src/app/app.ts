import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from "./features/tasks/components/task-list/task-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskmaster');
}
