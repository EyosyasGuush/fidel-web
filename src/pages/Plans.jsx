import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

function Plans(){
    return (
        <>
            <MainLayout>

                <div className="flex flex-col items-center justify-center mt-16 ">
                    <h1 className="text-4xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-200">Plans</h1>
                    <h1 className="text-2xl text-center lg:text-4xl text-zinc-900 dark:text-zinc-200 m-8">Available plans for tutors</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="border-2 border-zinc-300 dark:border-zinc-700 rounded-lg m-4 p-8 w-72 md:w-96">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Basic Plan</h1>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">This plan is perfect for tutors who are just starting out and want to get a feel for the platform.</p>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">Price: Free trial</p>
                            <Button text="Choose Plan"/>
                        </div>
                        <div className="border-2 border-zinc-300 dark:border-zinc-700 rounded-lg m-4 p-8 w-72 md:w-96">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Pro Plan</h1>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">This plan is ideal for tutors who want to take their tutoring business to the next level with additional features and support.</p>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">Price: 300 Birr/month</p>
                            <Button text="Choose Plan"/>
                        </div>
                        <div className="border-2 border-zinc-300 dark:border-zinc-700 rounded-lg m-4 p-8 w-72 md:w-96">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Premium Plan</h1>
                            <p className="text-zinc-900 dark:text-zinc-200 mb- 4">This plan is designed for established tutors who want to maximize their reach and impact with premium features and priority support.</p>
                            <p className="text-zinc-900 dark:text-zinc-200 mb-4">Price: 500 Birr/month</p>
                            <Button text="Choose Plan"/>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Plans;