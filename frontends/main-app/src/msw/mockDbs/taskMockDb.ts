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
      {
        id: 3,
        title: "Task 3",
        status: "active",
      },
      {
        id: 4,
        title: "Task 4",
        status: "completed",
      },
      {
        id: 5,
        title: "Task 5",
        status: "active",
      },
      {
        id: 6,
        title: "Task 6",
        status: "active",
      },
      {
        id: 7,
        title: "Task 7",
        status: "completed",
      },
      {
        id: 8,
        title: "Task 8",
        status: "active",
      },
      {
        id: 9,
        title: "Task 9",
        status: "active",
      },
      {
        id: 10,
        title: "Task 10",
        status: "completed",
      },
      {
        id: 11,
        title: "Task 11",
        status: "active",
      },
      {
        id: 12,
        title: "Task 12",
        status: "active",
      },
      {
        id: 13,
        title: "Task 13",
        status: "completed",
      },
      {
        id: 14,
        title: "Task 14",
        status: "active",
      },
      {
        id: 15,
        title: "Task 15",
        status: "active",
      },
      {
        id: 16,
        title: "Task 16",
        status: "completed",
      },
      {
        id: 17,
        title: "Task 17",
        status: "active",
      },
      {
        id: 18,
        title: "Task 18",
        status: "active",
      },
      {
        id: 19,
        title: "Task 19",
        status: "completed",
      },
      {
        id: 20,
        title: "Task 20",
        status: "active",
      },
    ];
  },
};
