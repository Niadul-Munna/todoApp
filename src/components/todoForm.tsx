"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const TodoForm = () => {
  const [value, SetValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetValue(event.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <Input
        className="w-4/5 p-5 ml-5"
        placeholder="Write You're Task Here..."
        onChange={handleChange}
      />
      <Button className="p-5">Add Your Task</Button>
    </form>
  );
};
