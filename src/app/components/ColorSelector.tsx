import React from 'react';
import { COLORS } from '../constants';

const ColorSelector = ({ 
  selectedColor, 
  onColorSelect 
}: { 
  selectedColor: string, 
  onColorSelect: (color: string) => void 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-header1 mb-2">Color</label>
      <div className="flex gap-2 flex-wrap">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color.id}
            onClick={() => onColorSelect(color.hex)}
            className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${
              selectedColor === color.hex ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1A1A1A]' : ''
            }`}
            style={{ backgroundColor: color.hex }}
            aria-label={`Select color ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;