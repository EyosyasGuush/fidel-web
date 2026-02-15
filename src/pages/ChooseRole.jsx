import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function ChooseRole() {
    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-32 gap-8">
                    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">Choose Your Role</h1>
                    <div className="flex flex-row gap-4">
                        <Link to="/register-student"><Button text={"I am a Student"} /></Link>
                        <Link to="/register-tutor"><Button text={"I am a Tutor"} /></Link>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default ChooseRole;