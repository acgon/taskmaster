import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskBoardComponent } from "./features/tasks/components/task-board/task-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskmaster');
}
