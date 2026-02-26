function DropdownContainer({ children, className }) {
  return (
    <div
      className={`absolute top-full right--5 w-48 text-zinc-600 dark:text-zinc-300
      bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700
        rounded-xl shadow-lg p-4 z-50 ${className}`}
        
    >
      {children}
    </div>
  );
}

export default DropdownContainer;