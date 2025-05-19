import type React from "react";

interface ITodoListProps {
  name: string;
}

export const TodoListScreen: React.FC<ITodoListProps> = ({ ...props }) => {
  return <div>TodoListScreen</div>;
};
