import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TagSelect from "../components/TagSelect";
import Button from "../components/Button";

function StudentRegister() {
    const [formData, setFormData] = useState({
        gradeLevel: "",
        learningMode: "",
        languagePreference: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center mt-16">
                        <form className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                            <h1 className="text-3xl font-bold text-zinc-800 py-5 dark:text-zinc-200">Student Registration</h1>
                            <div className="flex flex-col items-baseline justify-between">
                                <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-10 whitespace-nowrap">Grade Level: </label>
                                <div className="flex flex-wrap">
                                    <TagSelect name="gradeLevel" value="elementary" subject={"Elementary"} selected={formData.gradeLevel === "elementary"} onClick={handleChange} />
                                    <TagSelect name="gradeLevel" value="middle-school" subject={"Middle School"} selected={formData.gradeLevel === "middle-school"} onClick={handleChange} />
                                    <TagSelect name="gradeLevel" value="high-school" subject={"High School"} selected={formData.gradeLevel === "high-school"} onClick={handleChange} />
                                    <TagSelect name="gradeLevel" value="college" subject={"College"} selected={formData.gradeLevel === "college"} onClick={handleChange} />
                                </div>
                            </div>
                            <div className="flex flex-col items-baseline justify-between w-full">
                                <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Learning Mode: </label>
                                <div className="flex flex-wrap">
                                    <TagSelect name="learningMode" value="in-person" subject={"In Person"} selected={formData.learningMode === "in-person"} onClick={handleChange} />
                                    <TagSelect name="learningMode" value="online" subject={"Online"} selected={formData.learningMode === "online"} onClick={handleChange} />
                                </div>
                            </div>
                            <div className="flex flex-col items-baseline justify-between w-full">
                                <label className="text-xl text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Language Preference: </label>
                                <div className="flex flex-wrap items-center justify-around">
                                    <TagSelect name="languagePreference" value="english" subject={"English"} selected={formData.languagePreference === "english"} onClick={handleChange} />
                                    <TagSelect name="languagePreference" value="amharic" subject={"Amharic"} selected={formData.languagePreference === "amharic"} onClick={handleChange} />
                                    <TagSelect name="languagePreference" value="tigrigna" subject={"Tigrigna"} selected={formData.languagePreference === "tigrigna"} onClick={handleChange} />
                                    <TagSelect name="languagePreference" value="oromiffa" subject={"Oromiffa"} selected={formData.languagePreference === "oromiffa"} onClick={handleChange} />
                                </div>
                            </div>
                            <Button text={"Continue"} className={"px-9 mt-6"} />
                        </form>
                </div>
            </MainLayout>
        </>
    )
}

export default StudentRegister;