import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TagSelect from "../components/TagSelect";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";

function TutorRegister() {
    const [subjectInput, setSubjectInput] = useState("");

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const [schedule, setSchedule] = useState(
        daysOfWeek.map(day => ({
            dayOfWeek: day,
            morning: false,
            afternoon: false,
            evening: false
        }))
    )

    const handleScheduleChange = (index, field, value) => {
        setSchedule(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const [formData, setFormData] = useState({
        subject: [],
        bio: "",
        educationLevel: "",
        experienceYears: "",
        hourlyRate: "",
        subscriptionPlan: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            schedule
        }
        console.log(finalData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleAddSubject = () => {
        if (!subjectInput.trim()) return;

        setFormData(prev => ({
            ...prev,
            subject: [...prev.subject, subjectInput.trim()]
        }));

        setSubjectInput("");
    };
    const handleRemoveSubject = (subjectToRemove) => {
        setFormData(prev => ({
            ...prev,
            subject: prev.subject.filter(
            subject => subject !== subjectToRemove
            )
        }));
    };


  return (
     <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center ">
                        <form className="flex flex-col  items-center bg-zinc-100 dark:bg-zinc-800 p-6 m-4 rounded-2xl">
                            <h1 className="text-3xl font-bold text-zinc-800 mb-8 dark:text-zinc-200">Tutor Registration</h1>
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-col md:mt-2">
                                        <div className="flex flex-row items-baseline  w-full">
                                        <label className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mr-10 whitespace-nowrap">Subjects: </label>
                                            <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                            dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Add a subject..."
                                                                    value={subjectInput}
                                                                    onChange={(e) => setSubjectInput(e.target.value)}
                                                                    className="text text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                                />
                                                <label className="text-lg text-zinc-900 dark:text-zinc-200 whitespace-nowrap"
                                                                type="button" onClick={handleAddSubject}><FaPlus /></label>
                                            </div>
                                        </div>
                                            <div className="flex flex-wrap">
                                                {formData.subject.map((subject) => (
                                                    <TagSelect
                                                    className="hover:bg-red-500"
                                                    key={subject}
                                                    subject={subject}
                                                    onClick={() => handleRemoveSubject(subject)}
                                                    />
                                                ))}
                                            </div>
                                    <div className="flex flex-col items-baseline justify-between w-full">
                                        <label className="text-lg  font-bold text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Bio: </label>
                                        <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-full h-full max-w-md
                                                        dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4 mt-2">
                                            <textarea
                                                name="bio"
                                                value={formData.bio}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="A little bit about yourself..."
                                                className="text text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-baseline justify-between w-full mb-4">
                                        <label className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Education level: </label>
                                        <div className="flex flex-wrap items-center justify-around">
                                            <TagSelect name="educationLevel" value="highschool" subject={"High School"} selected={formData.educationLevel === "highschool"} onClick={handleChange} />
                                            <TagSelect name="educationLevel" value="bachelor" subject={"Bachelor"} selected={formData.educationLevel === "bachelor"} onClick={handleChange} />
                                            <TagSelect name="educationLevel" value="master" subject={"Master"} selected={formData.educationLevel === "master"} onClick={handleChange} />
                                            <TagSelect name="educationLevel" value="phd" subject={"PhD"} selected={formData.educationLevel === "phd"} onClick={handleChange} />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-baseline justify-between w-full">
                                        <label className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Experience: </label>
                                        <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                        dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                            <input
                                                                type="text"
                                                                name="experienceYears"
                                                                value={formData.experienceYears}
                                                                placeholder="1"
                                                                onChange={handleChange}
                                                                className="text text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                            />
                                        <label className="text text-zinc-900 dark:text-zinc-200 whitespace-nowrap">Year/s</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-baseline justify-between w-full">
                                        <label className="text font-bold text-zinc-900 dark:text-zinc-200 mr-2 whitespace-nowrap">Hourly rate: </label>
                                        <div className="flex items-center gap-1 border border-gray-300 rounded-2xl px-3 py-2 w-fit max-w-md
                                                        dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4">
                                                            <input
                                                                type="text"
                                                                name="hourlyRate"
                                                                value={formData.hourlyRate}
                                                                onChange={handleChange}
                                                                placeholder="100"
                                                                className="text text-zinc-950 dark:text-zinc-200 w-full outline-none"
                                                            />
                                        <label className="text text-zinc-900 dark:text-zinc-200 whitespace-nowrap">Birr/Hour</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-baseline justify-between w-full">
                                        <label className="text-lg font-bold text-zinc-900 dark:text-zinc-200 mr-2 mb-4 whitespace-nowrap">Subscription Plan: </label>
                                        <div className="flex flex-wrap items-center justify-around">
                                            <TagSelect name="subscriptionPlan" value="basic" subject={"Basic"} selected={formData.subscriptionPlan === "basic"} onClick={handleChange} />
                                            <TagSelect name="subscriptionPlan" value="premium" subject={"Premium"} selected={formData.subscriptionPlan === "premium"} onClick={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            {/* Schedule section */}
                                <div className="md:ml-10">
                                    <h2 className="text-lg font-bold w-full text-center text-zinc-600  dark:text-zinc-400">Availability</h2>
                                        <div className="flex flex-col">
                                        {schedule.map((day, index) => (
                                            <div key={index} className="flex flex-wrap items-center ">
                                                <label className="w-24 text-lg text-zinc-900 dark:text-zinc-200 mr-2">{day.dayOfWeek}</label>
                                                <div className="flex flex-auto items-center ">
                                                        <TagSelect name={day.dayOfWeek} value="morning" subject={"Morning"} selected={day.morning} onClick={(e) => handleScheduleChange(index, "morning", !day.morning)} />
                                                        <TagSelect name={day.dayOfWeek} value="afternoon" subject={"Afternoon"} selected={day.afternoon} onClick={(e) => handleScheduleChange(index, "afternoon", !day.afternoon)} />
                                                        <TagSelect name={day.dayOfWeek} value="evening" subject={"Evening"} selected={day.evening} onClick={(e) => handleScheduleChange(index, "evening", !day.evening)} />
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                </div>
                            </div>
                            <Button text={"Continue"} className={"px-9 mt-6"} onClick={handleSubmit} />
                        </form>
                </div>
            </MainLayout>
      </>
  )
}

export default TutorRegister;