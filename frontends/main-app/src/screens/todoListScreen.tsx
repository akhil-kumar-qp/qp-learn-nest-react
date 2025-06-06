import {
  WuModal,
  WuModalHeader,
  WuModalContent,
  WuModalFooter,
  WuModalClose,
  WuButton,
} from "@npm-questionpro/wick-ui-lib";
import React, { useEffect } from "react";
import type { ITodo } from "../types/ITodo";

interface IProps {
  userId?: string;
}

export const TodoListScreen: React.FC<IProps> = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  // State to manage the title input and modal visibility
  const [title, setTitle] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showError, setShowError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSave = async (): Promise<void> => {
    if (title.trim() === "") {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }

    setIsLoading(true);
    const newTodo = await callCreateApi(title);
    setIsLoading(false);

    setIsOpen(false);
    setTitle("");
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
    if (e.target.value.trim() !== "") {
      setShowError(false);
    }
  };

  useEffect(() => {
    const getTodos = async (): Promise<void> => {
      const todos = await callGetApi();
      setTodos(todos);
    };
    getTodos();
  }, []);

  const callGetApi = async (): Promise<ITodo[]> => {
    const todos = await fetch("/api/todos", {
      method: "GET",
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data.data as ITodo[];
      });
    return todos;
  };

  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <button onClick={() => setIsOpen(true)}>Create Todo</button>

      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            {index + 1} {todo.title}
          </div>
        ))}
      </div>
      <WuModal open={isOpen} onOpenChange={setIsOpen}>
        <WuModalHeader>Create Todo</WuModalHeader>
        <WuModalContent>
          <input
            type="text"
            title={title}
            onChange={handleUpdateTitle}
            placeholder="Title"
            aria-label="title"
            required
          />
          {showError && <p style={{ color: "red" }}>Please enter a title</p>}
        </WuModalContent>
        <WuModalFooter>
          <WuModalClose>Close</WuModalClose>
          <WuButton
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSave}
          >
            Save
          </WuButton>
        </WuModalFooter>
      </WuModal>
    </div>
  );
};

const callCreateApi = async (title: string): Promise<ITodo> => {
  const newTodo = await fetch("/api/todos", {
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.data as ITodo;
    });

  return newTodo;
};
