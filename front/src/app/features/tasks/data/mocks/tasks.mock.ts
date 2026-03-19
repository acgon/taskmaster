import { TaskModel } from "../models/task.model";

export const TASKS_MOCK: TaskModel[] = [
  {
    id: 1,
    title: 'Estudar Angular',
    description: 'Revisar componentes',
    status: 'done',
    order: 0
  },
  {
    id: 2,
    title: 'Treinar TypeScript',
    description: 'Praticar tipagem',
    status: 'todo',
    order: 0
  },
  {
    id: 3,
    title: 'Ler documentação',
    description: 'Angular Signals',
    status: 'doing',
    order: 0
  }
];
