import MainLayout from "../layouts/MainLayout"
import { IoSearch } from "react-icons/io5";
import TutorCard from "./TutorCard";

function TutorsList() {

  return (
    <>
        <MainLayout>
            <div className="flex flex-col items-center mx-4 mt-10">
                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 w-full max-w-md
                dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-8 shadow-xl">
                    <IoSearch className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tutors..."
                        className="text-xl text-zinc-950 dark:text-zinc-200 w-full outline-none"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center flex-wrap">
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
            </div>
        </MainLayout>
    </>
  )
}

export default TutorsList;