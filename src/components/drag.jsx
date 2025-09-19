import React from 'react';

const DragHandle = () => {
  return (
    <div className="flex flex-col items-center cursor-grab">
      {/* The three-dot drag handle */}
      <div className="flex flex-col space-y-1 opacity-70">
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      </div>
      
      {/* The "drag me" text */}
      <p className="mt-2 text-xs text-gray-400 font-medium select-none">
        drag me
      </p>
    </div>
  );
};

export default DragHandle;