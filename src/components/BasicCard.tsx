export const BasicCard: React.FC = ({ children }) => {
  return (
    <div className="font-sans bg-white bg-opacity-75 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};
