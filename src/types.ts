export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";
