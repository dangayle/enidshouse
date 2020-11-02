import React, { createRef } from "react";

export const InputWithLabel: React.FC<React.HTMLProps<
  HTMLInputElement
>> = React.forwardRef(({ name, ...props }, ref) => {
  return (
    <div className="p-2">
      <label
        htmlFor={`${name}-input`}
        className="block text-sm font-medium leading-5 text-gray-700">
        Full name
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={`${name}-input`}
          name={name}
          className="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="John Smith"
          {...props}
          ref={ref}
        />
      </div>
    </div>
  );
});
