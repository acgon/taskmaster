import { TaskStatus } from './task-status.type';

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  order: number;
}