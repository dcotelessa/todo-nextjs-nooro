export type Status = "TODO" | "COMPLETED" | "PENDING";

export interface Task {
  id: string;
  title: string;
  color: string;
  status: Status;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined in environment variables");
}

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

export const addTask = async ({
  title,
  color,
}: {
  title: string;
  color: string;
}): Promise<Task> => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, color }),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
};

export const toggleComplete = async (
  id: string,
  currentStatus: Status,
  title: string,
  color: string
): Promise<Task> => {
  let newStatus: Status;
  switch (currentStatus) {
    case "TODO":
      newStatus = "COMPLETED";
      break;
    case "COMPLETED":
      newStatus = "TODO";
      break;
    case "PENDING":
      newStatus = "TODO";
      break;
  }

  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      color,
      status: newStatus,
    }),
  });

  if (!response.ok) throw new Error("Failed to toggle task");
  return response.json();
};

export const updateTask = async (
  id: string,
  { title, color, status }: { title: string; color: string, status: Status }
): Promise<Task> => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, color, status }),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
};
