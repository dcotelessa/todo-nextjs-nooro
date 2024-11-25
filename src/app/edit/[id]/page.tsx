"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getAllTasks, Status, updateTask } from "../../services/taskServices";
import HeaderLogo from "../../components/HeaderLogo";
import ActionButton from "../../components/ActionButton";
import ColorSelector from "../../components/ColorSelector";

const EditTaskPage = () => {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [status, setStatus] = useState<Status>("PENDING");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const loadTask = async () => {
      try {
        const tasks = await getAllTasks();
        const task = tasks.find((t) => t.id === id);
        if (task) {
          setTitle(task.title);
          setSelectedColor(task.color);
          setStatus(task.status as Status);
          setLoaded(true);
        }
      } catch (_err) {
        setError("Failed to load task");
      }
    };
    loadTask();
  }, [id]);

  const isFormValid = () => {
    return title.trim() !== "" && selectedColor !== "";
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await updateTask(id as string, {
        title: title.trim(),
        color: selectedColor,
        status,
      });
      router.push("/");
      router.refresh();
    } catch (err) {
      setError("Failed to update task");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    if (isFormValid() && !isSubmitting) {
      const form = document.querySelector("form");
      form?.requestSubmit();
    }
  };

  return (
    <div>
      <header className="h-[200px] w-screen pt-8 pb-6 bg-headerbackground">
        <HeaderLogo />
      </header>

      <main className="flex-1 px-4 pt-8">
        <div className="max-w-3xl mx-auto w-full">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          {!loaded && <div>Loading...</div>}

          {loaded && (
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                onClick={() => router.back()}
                className="mb-6"
              >
                <Image
                  src="/arrow-left.svg"
                  alt="Back to Home"
                  width={24}
                  height={24}
                  priority
                />
              </button>
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-header1 mb-2"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  className="w-full p-4 bg-inputbkg rounded-lg border border-inputborder 
                          text-highlight placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-header1"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex. Brush your teeth"
                  required
                />
              </div>
              <div className="flex mb-10">
                <ColorSelector
                  selectedColor={selectedColor}
                  onColorSelect={handleColorSelect}
                />
              </div>

              <div className="flex gap-4">
                <ActionButton
                  type="button"
                  onClick={handleButtonClick}
                  disabled={!isFormValid() || isSubmitting}
                  classes="action-btn save-task"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </ActionButton>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditTaskPage;
