import SubjectTag from "../components/SubjectTag";

function TutorCard() {

  return (
    <>
        <div className={` flex flex-col items-center justify-center shadow
                        bg-zinc-100 dark:bg-zinc-800 p-4 m-2 rounded-2xl w-auto`}>
            <div className="flex flex-col items-center md:gap-4">
                <div className="flex flex-row">
                    <img src="https://cdn.pixabay.com/photo/2024/05/31/18/54/meme-8801100_1280.png"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-2 border-zinc-300"/>
                    <section className="flex flex-row">
                        <p className="text-xl md:text-xl font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2 ">Eyosyas Guush</p>
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2">20</p>
                            <p className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2">Male</p>
                        </div>
                    </section>
                </div>
                <div>
                    <p className="text-lg md:text-xl font-bold text-zinc-800 dark:text-zinc-200 mx-2 p-2">Addis Ababa, Ethiopia</p>
                </div>
            </div>
            <div className=" flex flex-row flex-wrap justify-center mt-4">
                <SubjectTag subject="Mathematics" />
                <SubjectTag subject="Physics" />
                <SubjectTag subject="Chemistry" />
            </div>
        </div>
    </>
  )
}

export default TutorCard;