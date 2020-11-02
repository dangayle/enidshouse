import React from "react";

export const InputWithInlineLeading: React.FC<React.HTMLProps<
  HTMLInputElement
>> = React.forwardRef(({ name, ...props }, ref) => {
  return (
    <div className="p-2">
      <label
        htmlFor={`${name}-input`}
        className="block text-sm font-medium leading-5 text-gray-700">
        Amount
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm sm:leading-5">$</span>
        </div>
        <input
          id={`${name}-input`}
          name={name}
          className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="0.00"
          aria-describedby="price-currency"
          {...props}
          ref={ref}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span
            className="text-gray-500 sm:text-sm sm:leading-5"
            id="price-currency">
            USD
          </span>
        </div>
      </div>
    </div>
  );
});
