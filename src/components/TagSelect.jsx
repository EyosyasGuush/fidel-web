
function TagSelect({name, value, subject, selected, onClick, className=""}) {
    return (
        <span className={`md:text font-medium text-zinc-600 whitespace-nowrap dark:text-zinc-300
            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
            hover:scale-101 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
            ${selected ? "border-blue-500" : "border-zinc-300 dark:border-zinc-600"} ${className}`} 
              onClick={() =>
                    onClick({
                        target: {
                            name, value
                        }
                })
            }>{subject}</span>
    );
}

export default TagSelect;