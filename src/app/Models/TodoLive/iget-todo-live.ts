export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface IGetTodoLive {
  data: ITodoItem[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}

