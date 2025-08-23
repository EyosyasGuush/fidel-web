function Button({text, className, onClick}) {
  return (
    <button 
    className={`bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100  m-2 py-2 px-4 max-w-fit
         border-2 border-zinc-800 dark:border-zinc-600 rounded-3xl hover:scale-105 transition duration-150
        ${className}`} onClick={onClick}>
        {text}
    </button>
  );
}   

export default Button;