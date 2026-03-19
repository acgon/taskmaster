import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskModel } from '../../../data/models/task.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})

export class EditTaskComponent {
  task: TaskModel;

  constructor(
    private dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel | null
  ) {
    this.task = data ? {...data} : {
      id: Date.now(),
      title: '',
      description: '',
      status: 'todo',
      order: 999999
    };
  }

  salvar() {
    this.dialogRef.close(this.task);
  }

}
