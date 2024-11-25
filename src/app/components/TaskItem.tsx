import React from "react";
import Image from "next/image";
import { type Task } from "../services/taskServices";

interface TaskItemProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem = ({ task, onComplete, onDelete, onEdit }: TaskItemProps) => {
  const completed = task.status === "COMPLETED";

  return (
    <div className="group flex items-start gap-3 rounded-lg p-4 mb-3">
      <button
        onClick={onComplete}
        className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${
            completed
              ? "bg-header2 border-header2"
              : "border-header1 hover:border-header1/90 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] hover:bg-header1/20"
          } transition-all duration-300`}
      >
        {completed && <span className="text-white text-sm">✓</span>}
      </button>

      <button
        onClick={onEdit}
        className="flex-grow text-left hover:bg-white/5 rounded px-2 -mx-2 cursor-pointer"
      >
        <p
          className={`${
            completed ? "text-foreground line-through" : "text-highlight"
          }`}
        >
          {task.title}
        </p>
      </button>

      <button onClick={onDelete} className="flex-shrink-0">
        <Image
          src="/trash.svg"
          alt="Delete task"
          width={24}
          height={24}
          className="text-foreground"
        />
      </button>
    </div>
  );
};

export default TaskItem;
