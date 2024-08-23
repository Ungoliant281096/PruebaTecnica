import React, { useState, useEffect } from 'react';

export function CantidadInput({ value = 0, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleIncrement = () => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = inputValue > 0 ? inputValue - 1 : 0;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-x-2">
      <button 
        type="button"
        onClick={handleDecrement} 
        className="bg-red-500 text-white px-3 py-1 rounded-lg focus:outline-none hover:bg-red-600"
      >
        -
      </button>
      <input 
        type="text" 
        value={inputValue}
        readOnly
        className="bg-zinc-600 w-12 text-center  rounded-lg py-1"
      />
      <button 
        type="button"
        onClick={handleIncrement} 
        className="bg-green-500 text-white px-3 py-1 rounded-lg focus:outline-none hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}
