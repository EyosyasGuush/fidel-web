import SubjectTag from "../components/SubjectTag";
import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function TutorCard() {

  return (
    <>
        <div className={` flex flex-col items-center justify-center shadow
                        bg-zinc-100 dark:bg-zinc-800 p-4 m-2 rounded-2xl`}>
            <div className="flex flex-col items-center md:gap-4">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <img src="https://cdn.pixabay.com/photo/2024/05/31/18/54/meme-8801100_1280.png"
                            className="w-24 h-24 md:w-36 md:h-36 rounded-xl border-2 border-zinc-300 mt-4 md:mt-2"/>
                        <div className="flex flex-row-reverse">
                            <p className="text-sm text-center font-bold rounded-2xl px-2 py-1 m-2 w-16 bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 md:hidden">300/hr</p>
                        </div>
                    </div>
                    <section className="flex flex-col">
                        <div className="flex flex-row">
                            <p className="text-xl text-nowrap font-bold text-zinc-800 dark:text-zinc-200 m-2 pl-2">Eyosyas Guush</p>
                            <RiVerifiedBadgeFill className="text-zinc-800 dark:text-zinc-200 mt-4 mr-4"/>
                            <p className="text-sm font-bold text-zinc-600 dark:text-zinc-400 mt-3.5">M</p>
                            <p className="text-sm text-right font-bold rounded-2xl px-2 py-1 m-2 md:ml-18 bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hidden md:block">300/hr</p>
                        </div>
                        <div className=" flex-row items-center justify-center mx-2 p-1 w-60 md:w-80">
                            <p className="italic text-sm font-bold text-zinc-600 dark:text-zinc-400 line-clamp-3 cursor-pointer">
                            ❝
                                lorem   ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque. lorem   ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.
                                lorem   ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque. lorem   ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque. 
                            ❞
                            </p>
                        </div>
                        <div className="flex flex-row ">
                            <p className="flex text-lg font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2"><FaUniversity className="m-1"/>SIT</p>
                            <p className="flex text-lg font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2 text-nowrap"><FaLocationDot className="m-1"/>Addis Ababa</p>
                        </div>
                    </section>
                </div>
                <div>
                </div>
            </div>
            <div className=" flex flex-row flex-wrap justify-center">
                <SubjectTag subject="Mathematics" />
                <SubjectTag subject="Physics" />
                <SubjectTag subject="Chemistry" />
            </div>
        </div>
    </>
  )
}

export default TutorCard;