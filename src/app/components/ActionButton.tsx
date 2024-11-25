"use client";

import { FC, ReactNode } from "react";

const ActionButton: FC<{
  children: ReactNode;
  onClick?: () => void;
  classes?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}> = ({ children, onClick, classes, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={type === "button" ? onClick : undefined}
      disabled={disabled}
      className={`${classes} w-full h-fit bg-button text-highlight gap-8 p-4 rounded-lg`}
    >
      <span>{children}</span>
    </button>
  );
};

export default ActionButton;
