import MainLayout from "../layouts/MainLayout";

function About(){

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-32">
                    <h1 className="text-4xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-200">About us</h1>
                    <h1 className="text-xl text-center lg:text-2xl text-zinc-900 dark:text-zinc-200 m-8 w-1/2">
                        The motive behind creating this platform is to provide a seamless and efficient way for students to connect with tutors who can help them excel in their academic pursuits. 
                        We understand the challenges that students face in finding the right tutor, and we aim to simplify this process by offering a user-friendly platform that brings together students and tutors in one place.

                    </h1>
                </div>
            </MainLayout>
        </>
    )
}

export default About;