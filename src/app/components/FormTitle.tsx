import React from "react";

const FormTitle = ({
  title,
  handleTitleChange,
}: {
  title: string;
  handleTitleChange: (title: string) => void;
}) => {
  return (
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
        onChange={(e) => handleTitleChange(e.target.value)}
        placeholder="Ex. Brush your teeth"
        required
      />
    </div>
  );
};

export default FormTitle;
