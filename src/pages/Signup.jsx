import Button from "../components/Button";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TagSelect from "../components/TagSelect";
import { useState } from "react";

function Signup(){
    const [isVisible, setIsVisible] = useState({
        bySubcity: true,
        byLandmark: false,
        byCampus: false
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
        locationType: "BySubcity" | "ByLandmark" | "ByCampus",
        country: "",
        region: "",
        city: "",
        subcity: "",

        landmark: "",
        campus: "",
    })

    const handleLocationType = (type) => {
        setIsVisible({
            bySubcity: type === "BySubcity",
            byLandmark: type === "ByLandmark",
            byCampus: type === "ByCampus"
        });
        setFormData(prev => ({
            ...prev,
            locationType: type,

            // reset opposite fields
            country: "",
            region: "",
            city: "",
            subcity: "",
            campus: "",
            landmark: ""
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-2">
                    <form className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 mb-4">User Registration</h1>
                        <div className="flex flex-col items-baseline justify-between w-full">
                            <div className="flex flex-col items-baseline justify-between w-full">
                                <div className="flex flex-col items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-9">Name: </label>
                                    <input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                    text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your name" />
                                </div>
                                <div className="flex flex-col items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-10">Email: </label>
                                    <input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                    text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your email" />
                                </div>
                                <div className="flex flex-col items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-10">Number: </label>
                                    <input type="text" value={formData.number} onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                                    className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                    text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your phone number" />
                                </div>
                                <div className="flex flex-col items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2">Password: </label>
                                    <input type="password" value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                    className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                    text-zinc-900 dark:text-zinc-200 w-full" placeholder="Enter your password" />
                                </div>
                                <div className="flex flex-col items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2">Confirm Password: </label>
                                    <input type="password" value={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                    className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                    text-zinc-900 dark:text-zinc-200 w-full" placeholder="Confirm your Password" />
                                </div>
                            </div>
                            {/* Address input fields */}
                            <div className="flex flex-col items-center justify-center mt-2">
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Country: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                                                            placeholder="Country"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Region: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="region"
                                                            value={formData.region}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, region: e.target.value }))}
                                                            placeholder="Region"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">City: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                                                            placeholder="City"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div>
                                </div>
                                {/* SubCity Landmark Campus */}
                                <div className="flex flex-row items-baseline w-full m-1">
                                    <TagSelect
                                        className="text-sm"
                                        selected={formData.locationType === "BySubcity"}
                                        onClick={() => handleLocationType("BySubcity")}
                                        subject="By Subcity"
                                    />
                                    <TagSelect
                                        className="text-sm"
                                        selected={formData.locationType === "ByLandmark"}
                                        onClick={() => handleLocationType("ByLandmark")}
                                        subject="By Landmark"
                                    />
                                    <TagSelect
                                        className="text-sm"
                                        selected={formData.locationType === "ByCampus"}
                                        onClick={() => handleLocationType("ByCampus")}
                                        subject="By Campus"
                                    />
                                </div>
                                {isVisible.bySubcity && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Sub-city: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="subCity"
                                                            value={formData.subCity}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, subCity: e.target.value }))}
                                                            placeholder="Sub-city"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div>
                                </div> )}
                                {isVisible.byLandmark && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Landmark: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="landmark"
                                                            value={formData.landmark}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, landmark: e.target.value }))}
                                                            placeholder="Landmark"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div> 
                                </div> )}
                                {isVisible.byCampus && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-lg text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Campus: </label>
                                    <div className="flex items-center gap-1">
                                                        <input
                                                            type="text"
                                                            name="campus"
                                                            value={formData.campus}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, campus: e.target.value }))}
                                                            placeholder="Campus"
                                                            className="text-sm border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl p-2 m-1
                                                                        text-zinc-900 dark:text-zinc-200 w-full"
                                                        />
                                    </div>
                                </div> )}
                        </div>
                </div>
                        <Button text={"SignUp!"} className={"px-9 mt-2"} onClick={handleSubmit} />
                        <p className="text-zinc-900 dark:text-zinc-200 mt-2">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}

export default Signup;