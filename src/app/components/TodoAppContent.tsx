"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import HeaderLogo from "./HeaderLogo";
import NoTasks from "./NoTasks";
import ActionButton from "./ActionButton";
import Counter from "./Counter";
import TaskList from "./TaskList";
import {
  getAllTasks,
  toggleComplete,
  deleteTask,
  type Task,
} from "../services/taskServices";

const TodoApp = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const loadedTasks = await getAllTasks();
      setTasks(loadedTasks);
      setError(null);
    } catch (err) {
      setError("Failed to load tasks");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = () => {
    router.push('/create');
  };

  const handleCompleteTask = async (task: Task) => {
    try {
      await toggleComplete(task.id, task.status, task.title, task.color);
      loadTasks();
      setError(null);
    } catch (err) {
      setError("Failed to update task");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");

    if (confirmed) {
      try {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
        setError(null);
      } catch (err) {
        setError("Failed to delete task");
        console.error(err);
      }
    }
  };

  return (
    <div>
      <header className="h-[200px] w-screen pt-8 pb-6 bg-headerbackground">
        <HeaderLogo />
      </header>

      <nav className="relative -mt-8 px-4 max-w-3xl mx-auto w-full">
        <ActionButton onClick={handleCreateTask} classes="action-btn add-task">
          Create Task
        </ActionButton>
      </nav>

      <main className="flex-1 px-4 pt-8">
        <div className="max-w-3xl mx-auto w-full">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center mb-4">
            <Counter label="Tasks" value={tasks.length.toString()} />
            <Counter
              label="Completed"
              value={
                tasks.length > 0
                  ? `${tasks.filter((t) => t.status === "COMPLETED").length} of ${
                      tasks.length
                    }`
                  : "0"
              }
            />
          </div>

          <section>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : tasks.length === 0 ? (
              <NoTasks />
            ) : (
              <TaskList
                tasks={tasks}
                onComplete={handleCompleteTask}
                onDelete={handleDeleteTask}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default TodoApp;