import { LucideCheck, LucideCheckCircle, LucideTrash } from "lucide-react";
import React from "react";

interface TodoListProps {
  task: string;
}

const TodoList = ({ task }: TodoListProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-3 my-4 hover:bg-gray-300">
      <div className="flex items-center gap-2 my-4 text-lg">
        <div className="flex flex-1 items-center gap-2">
          <LucideCheckCircle />
          <p>{task}</p>
        </div>
        <LucideTrash className="hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default TodoList;
