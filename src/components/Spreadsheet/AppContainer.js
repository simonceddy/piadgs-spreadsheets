function AppContainer({ children }) {
  return (
    <div className="w-full dark:bg-black dark:text-yellow-100 h-full flex flex-col justify-between items-center">
      {children}
    </div>
  );
}

export default AppContainer;
