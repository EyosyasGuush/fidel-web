import MainLayout from "../layouts/MainLayout";
import TagSelect from "../components/TagSelect";
import Button from "../components/Button";
import { useState } from "react";

function AddressRegister() {
    const [isVisible, setIsVisible] = useState({
        bySubcity: false,
        byLandmark: false,
        byCampus: false
    });
    const [formData, setFormData] = useState({
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
            <div className="flex flex-col items-center justify-center mt-8">
                        <form className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                            <h1 className="text-3xl font-bold text-zinc-800 py-2 mb-2 dark:text-zinc-200">Address Registration</h1>
                            <label className="text-xl font-bold text-zinc-800 py-2 mb-2 dark:text-zinc-200">Location Type</label>
                                <div className="flex flex-wrap items-baseline  w-full mb-2">
                                    <TagSelect
                                        selected={formData.locationType === "BySubcity"}
                                        onClick={() => handleLocationType("BySubcity")}
                                        subject="By Subcity"
                                    />
                                    <TagSelect
                                        selected={formData.locationType === "ByLandmark"}
                                        onClick={() => handleLocationType("ByLandmark")}
                                        subject="By Landmark"
                                    />
                                    <TagSelect
                                        selected={formData.locationType === "ByCampus"}
                                        onClick={() => handleLocationType("ByCampus")}
                                        subject="By Campus"
                                    />
                                </div>
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Country: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                                                            placeholder="Country"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Region: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="region"
                                                            value={formData.region}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, region: e.target.value }))}
                                                            placeholder="Region"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">City: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                                                            placeholder="City"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div>
                                </div>
                                {isVisible.bySubcity && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Sub-city: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subCity"
                                                            value={formData.subCity}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, subCity: e.target.value }))}
                                                            placeholder="Sub-city"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div>
                                </div> )}
                                {isVisible.byLandmark && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Landmark: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="landmark"
                                                            value={formData.landmark}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, landmark: e.target.value }))}
                                                            placeholder="Landmark"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div> 
                                </div> )}
                                {isVisible.byCampus && ( <div className="flex flex-row items-baseline justify-between w-full">
                                    <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Campus: </label>
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                    dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                        <input
                                                            type="text"
                                                            name="campus"
                                                            value={formData.campus}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, campus: e.target.value }))}
                                                            placeholder="Campus"
                                                            className="text-lg text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                        />
                                    </div>
                                </div> )}
                            <Button text={"Done!"} className={"px-9 mt-6"} onClick={handleSubmit} />
                        </form>
                </div>
        </MainLayout>
        </>
    )
}

export default AddressRegister;