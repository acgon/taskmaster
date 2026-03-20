import { TaskModel } from "../models/task.model";

export const TASKS_MOCK: TaskModel[] = [
  {
    id: 1,
    title: 'Estudar Angular',
    description: 'Revisar componentes básicos.',
    status: 'todo',
    order: 0
  },
  {
    id: 2,
    title: 'Treinar TypeScript',
    description: 'Praticar tipagem avançada com generics e utility types.',
    status: 'todo',
    order: 0 // duplicado
  },
  {
    id: 3,
    title: 'Ler documentação',
    description: 'Angular Signals.',
    status: 'doing',
    order: 0
  },
  {
    id: 4,
    title: 'Refatorar código',
    description: 'Melhorar a organização dos componentes e separar melhor as responsabilidades dentro da aplicação.',
    status: 'doing',
    order: 1
  },
  {
    id: 5,
    title: 'Corrigir bugs',
    description: 'Resolver problemas reportados.',
    status: 'doing',
    order: 1 // duplicado
  },
  {
    id: 6,
    title: 'Implementar drag and drop',
    description: 'Adicionar funcionalidade de arrastar e soltar entre colunas com reorder consistente.',
    status: 'done',
    order: 0
  },
  {
    id: 7,
    title: 'Ajustar layout',
    description: 'Centralizar elementos.',
    status: 'done',
    order: 0 // duplicado
  },
  {
    id: 8,
    title: 'Melhorar UX',
    description: 'Adicionar feedback visual ao usuário durante interações como hover, clique e drag.',
    status: 'todo',
    order: 2
  },
  {
    id: 9,
    title: 'Testar edge cases',
    description: 'Criar cenários com dados inconsistentes, como ordens duplicadas e textos muito longos para validar comportamento.',
    status: 'done',
    order: 2
  },
  {
    id: 10,
    title: 'Deploy',
    description: 'Subir aplicação.',
    status: 'doing',
    order: 2
  }
];