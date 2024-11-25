"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { addTask } from "../services/taskServices";
import HeaderLogo from "../components/HeaderLogo";
import ActionButton from "../components/ActionButton";
import ColorSelector from "../components/ColorSelector";

const CreateTaskPage = () => {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    updateFormStatus(title, color);
  };

  const updateFormStatus = (currentTitle: string, currentColor: string) => {
    setIsFormComplete(currentTitle.trim() !== "" && currentColor !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormComplete || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addTask({
        title: title.trim(),
        color: selectedColor,
      });
      router.push("/");
      router.refresh();
    } catch (err) {
      setError("Failed to create task");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    if (isFormComplete && !isSubmitting) {
          const form = document.querySelector('form');
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
                disabled={!isFormComplete || isSubmitting}
                classes="action-btn add-task"
              >
                {isSubmitting ? "Creating..." : "Create Task"}
              </ActionButton>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
export default CreateTaskPage;
