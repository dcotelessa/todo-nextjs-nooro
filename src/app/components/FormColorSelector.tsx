import React from "react";
import ColorSelector from "./ColorSelector";

const FormColorSelector = ({
  selectedColor,
  handleColorSelect,
}: {
  selectedColor: string;
  handleColorSelect: (color: string) => void;
}) => {
  return (
    <div className="flex mb-10">
      <ColorSelector
        selectedColor={selectedColor}
        onColorSelect={handleColorSelect}
      />
    </div>
  );
};

export default FormColorSelector;
