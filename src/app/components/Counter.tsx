import { FC } from "react";

const Counter: FC<{ value: string; label?: string }> = ({ value, label }) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-header1 text-sm font-700">{label}</h2>
      <span className="bg-counter px-2 py-0.5 rounded-lg text-xs text-text">
        {value}
      </span>
    </div>
  );
};

export default Counter;
