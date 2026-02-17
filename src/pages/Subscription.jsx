import { useState } from "react";
import TagSelect from "../components/TagSelect";
import MainLayout from "../layouts/MainLayout";

function Subscription() {
    const [paymentMethod, setPaymentMethod] = useState("");

    return (
        <>
        <MainLayout>
            <div className="flex flex-col items-center justify-between mt-8">
                <div className="flex flex-col w-1/4 items-center bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Subscription</h1>
                    <label className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">Choose payment method</label>
                    <div className="flex flex-row items-center justify-start gap-4">
                        <TagSelect subject="TeleBirr" selected={paymentMethod === "telebirr"} onClick={() => {setPaymentMethod("telebirr")}}/>
                        <TagSelect subject="CBE" selected={paymentMethod === "cbe"} onClick={() => {setPaymentMethod("cbe")}}/>
                        <TagSelect subject="Abissinya" selected={paymentMethod === "abissinya"} onClick={() => {setPaymentMethod("abissinya")}}/>
                    </div>
                    {paymentMethod === "telebirr" && <div className="flex flex-col items-center mt-4">
                        <label className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2">Enter your TeleBirr number</label>
                        <input type="text" className="p-2 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-100"/>
                        <div className="flex flex-col items-center gap-4 m-2">
                            <label className="text-lg font-medium text-zinc-900 dark:text-zinc-200 mt-2 mb-2">Pay with QR Code</label>
                            <img 
                                src="/telebirr-qr-code.png" 
                                alt="TeleBirr QR Code" 
                                className="w-64 h-64 rounded-2xl"/>
                        </div>
                    </div>}
                </div>
            </div>
        </MainLayout>
        </>
    )
}

export default Subscription;