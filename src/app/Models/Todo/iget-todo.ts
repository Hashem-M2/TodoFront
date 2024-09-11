
export interface IGetTodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IGetTodosResponse {
  data: IGetTodo[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}

