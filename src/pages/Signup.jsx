import Button from "../components/Button";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Signup(){

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-10">
                    <form className="flex flex-col items-center md:w-1/4 bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 m-4">Register</h1>
                            <div className="flex flex-row items-baseline justify-between w-full">
                                <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-9">Name: </label>
                                <input type="email" 
                                className="border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-2
                                text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your name" />
                            </div>
                            <div className="flex flex-row items-baseline justify-between w-full">
                                <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-10">Email: </label>
                                <input type="email" 
                                className="border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-2
                                text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your email" />
                            </div>
                            <div className="flex flex-row items-baseline justify-between w-full">
                                <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2">Password: </label>
                                <input type="password"
                                className="border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-2
                                text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your password" />
                            </div>
                            <div className="flex flex-row items-baseline justify-between w-full">
                                <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2">Password: </label>
                                <input type="password"
                                className="border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-2
                                text-zinc-900 dark:text-zinc-200 w-full" placeholder="Confirm your Password" />
                            </div>
                        <Button text={"Signup"} className={"px-9"} /> 
                        <p className="text-zinc-900 dark:text-zinc-200 mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                        <p className="text-zinc-900 dark:text-zinc-200 mt-2">Or continue with:</p>
                        <div className="flex flex-row items-center justify-center mt-2">
                            <Button text={"Google"} className={"px-4 py-2 rounded-lg m-2"} />
                            <Button text={"Facebook"} className={"px-4 py-2 rounded-lg m-2"} />
                        </div> 
                    </form>
                </div>
            </MainLayout>
        </>
    )
}

export default Signup;