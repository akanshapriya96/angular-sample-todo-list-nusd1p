export interface Todo {
  id: number;
  title: string;
  isFavorite: boolean;
  date?: Date;
  isDeleted: boolean;
  isCompleted: boolean;
}
