function SubjectTag({subject, onClick}) {
    return (
        <span className="md:text-base font-medium text-zinc-600 dark:text-zinc-300
            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-full
              hover:scale-105 transition duration-100" onClick={onClick}>{subject}</span>
    );
}

export default SubjectTag;