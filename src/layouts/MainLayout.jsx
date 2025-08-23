import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Button from "../components/Button";
import { Link } from "react-router-dom";


function MainLayout({children}) {
    const [theme, setTheme] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    return (<>
            <div className={`${theme ? "dark" : ""} bg-white dark:bg-zinc-900 flex flex-col min-h-screen w-full`}>
                <div className="bg-zinc-200 dark:bg-zinc-800 flex flex-row items-center justify-between w-full">
                    <h1 className="text-2xl text-right font-extrabold text-zinc-700 dark:text-zinc-200 pl-4 ">Fidel</h1>
                    <ul className="justify-center items-center mx-4 ml-12 hidden md:block">
                        <Link to="/home" className="text-lg dark:text-white mx-4">home</Link>
                        <Link to="/about" className="text-lg dark:text-white mx-4">about</Link>
                        <Link to="/plans" className="text-lg dark:text-white mx-4">plans</Link>
                        <Link to="/contacts" className="text-lg dark:text-white mx-4">contacts</Link>
                    </ul>
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <Link to="/login" className="text-lg dark:text-white mx-4"><FiUser /></Link>
                            <Button text={theme? <BiMoon /> : <FiSun /> } 
                                    className={"m-2 p-2 items-end justify-end"}
                                    onClick={() => {setTheme(!theme)}}/>
                        </div>
                        <Button text={isOpen? <IoClose /> : <MdMenu />} 
                                className={"px-1 items-end justify-end md:hidden"}
                                onClick={() => {setIsOpen(!isOpen)}}/>
                    </div>
                </div>
                    { isOpen &&
                        <ul className="relative top-6 right-2 flex flex-row justify-center items-center m-2 p-4
                                        bg-zinc-200 dark:bg-zinc-800 w-full">
                            <Link to="/home" className="text-lg dark:text-white mx-4">home</Link>
                            <Link to="/about" className="text-lg dark:text-white mx-4">about</Link>
                            <Link to="/plans" className="text-lg dark:text-white mx-4">plans</Link>
                            <Link to="/contacts" className="text-lg dark:text-white mx-4">contacts</Link>
                        </ul>
                    }
            {children}
            </div>
            <footer className={`${theme ? "dark" : ""} bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center justify-center w-full p-2`}>
                <p className="text-zinc-900 dark:text-zinc-100">Copyright © 2025 All Rights Reserved</p>
            </footer>
        </>
    );
}

export default MainLayout;