"use client";
import { Button } from "../ui/button";
import { LucideListTodo } from "lucide-react";
import TodoList from "./todoList";

const Todo = () => {
  return (
    <>
      {/* --------Title------- */}
      <div className="flex gap-4 items-center">
        <LucideListTodo />
        <h1 className="text-3xl font-bold">TODO APP</h1>
      </div>

      {/* --------input box------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-lg">
        <input
          type="text"
          placeholder="Add Your Task"
          className="bg-transparent border-0 outline-none h-14 pl-6 pr-2 flex-1 placeholder:text-slate-600"
        />
        <Button className="w-32 shadow-lg h-14 rounded-lg text-lg font-medium bg-orange-600 hover:bg-orange-500 hover:text-xl">
          Add +
        </Button>
      </div>
      {/* --------Todo List------- */}

      <TodoList task="Task 1" />
      <TodoList task="Task 2" />
    </>
  );
};

export default Todo;
