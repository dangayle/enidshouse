import classnames from "classnames";

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  disabled,
  type = "button",
}) => {
  const className =
    "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md transition ease-in-out duration-150";
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type={type as "button" | "submit" | "reset"}
        disabled={disabled}
        className={classnames(className, {
          "text-gray-400 bg-gray-200": disabled,
          "text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700": !disabled,
        })}>
        {children}
      </button>
    </span>
  );
};
