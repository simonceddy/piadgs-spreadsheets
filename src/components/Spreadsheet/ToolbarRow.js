function ToolbarRow({ children }) {
  return (
    <div className="w-full flex flex-row justify-between items-center p-2 dark:border-yellow-200 border-green-600 border-b-2">
      {children}
    </div>
  );
}

export default ToolbarRow;
