const Button: React.FC = ({ children }) => {
  return (
    <span className="bg-white bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2">
      {children}
    </span>
  );
};

export default Button;
