export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface Card {
  id: number;
  title: string;
  tasks: Task[];
}
