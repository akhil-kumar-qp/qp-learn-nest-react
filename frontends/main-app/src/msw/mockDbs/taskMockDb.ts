import type { ITodo } from "../../types/ITodo";

export const taskMockDb = {
  getTask: (): ITodo[] => {
    return [
      {
        id: 1,
        title: "Task 1",
        status: "completed",
      },
      {
        id: 2,
        title: "Task 2",
        status: "active",
      },
    ];
  },
};
