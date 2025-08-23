import MainLayout from "../layouts/MainLayout";

function Contacts(){

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-32">
                    <h1 className="text-4xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-200">Contacts</h1>
                    <h1 className="text-2xl text-center lg:text-4xl text-zinc-900 dark:text-zinc-200 m-8">The lead developer</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <img src="https://pbs.twimg.com/media/GwlmX-nW4AAh4Mq?format=jpg&name=large" alt="Eyosyas Guush" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"/>
                        <div className="m-4 p-8 w-72 md:w-96">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Eyosyas Guush</h1>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">Email: eyosyasguesh@gmail.com</p>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">Phone: +251 963 521 968</p>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">GitHub: <a className="text-zinc-900 dark:text-zinc-200 mb-4" href="https://github.com/EyosyasGuush">/EyosyasGuush</a></p>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Contacts;