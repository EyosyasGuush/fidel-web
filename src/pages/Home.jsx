import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function Home(){

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-32">
                    <h1 className="text-4xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-200">Welcome</h1>
                    <h1 className="text-2xl text-center lg:text-4xl text-zinc-900 dark:text-zinc-200 m-8">The best platform for linking students and tutors.</h1>
                    <div className="flex flex-row items-center justify-center">
                        <Link to="/tutors"><Button text={"Find a tutor"}/></Link>
                        <Link to="/register-tutor"><Button text={"Become a Tutor"} /></Link>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Home;