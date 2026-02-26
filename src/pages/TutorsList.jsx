import MainLayout from "../layouts/MainLayout"
import { IoSearch } from "react-icons/io5";
import TutorCard from "./TutorCard";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";
import { FaMountain } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { PiDotsThreeCircleFill } from "react-icons/pi";

import PriceFilter, { EducationFilter, ExperienceFilter, FormatFilter, GenderFilter, LocationFilter, RatingFilter } from "../components/DropdownFilters";

function TutorsList() {
    const dropdownRef = useRef(null);
    const [isVisible, setIsVisible] = useState('max-sm:hidden')

    const [formData, setFormData] = useState({
        minPrice: 0,
        maxPrice: 0,
        country: "",
        region: "", 
        city: "",
        subCity: "",
        campus: "",
        landmark: "",
        rating: [],
        subjects: [],
        gender: [],
        experience: [],
        education: [],
        format: []
    })

    const handleFilterChange = (key, value) => {
        setFormData(prev =>{
            const currentValue = prev[key]

            if(Array.isArray(currentValue)){
                return({
                    ...prev,
                    [key]: currentValue.includes(value)
                        ? currentValue.filter(item => item !== value)
                        : [...currentValue, value]
                })
            }
            return({
                ...prev,
                [key]: value
            })
        })
    }
    
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        function handleClickOutside(event) {
            if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
            ) {
            setSelectedFilter("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


  return (
    <>
        <MainLayout>
            <div className="flex flex-col items-center mx-4 mt-10">
                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 w-full max-w-md
                dark:border-gray-600 bg-zinc-50 dark:bg-zinc-800 mb-4 shadow-xl">
                    <IoSearch className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tutors..."
                        className="text-xl text-zinc-950 dark:text-zinc-200 w-full outline-none"
                    />
                </div>
                <div className="relative flex flex-row items-center justify-center md:mb-4 flex-wrap">
                    <label className="flex items-center gap-1 text-zinc-800 dark:text-zinc-200"> Filters </label>
                    <div className="relative">
                        <button className="flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                            hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                            border-zinc-300 dark:border-zinc-600"
                        onClick={() => setSelectedFilter(prev => prev === "price" ? "" : "price")}>
                            <BiSolidDollarCircle className="text-xl text-zinc-700 dark:text-zinc-300 mr-1" />Price
                            </button> 
                            {selectedFilter === "price"&&
                                <PriceFilter 
                                    min={formData.minPrice}
                                    max={formData.maxPrice}
                                    ref={dropdownRef}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={handleFilterChange}/>
                            }
                    </div>
                    <div className="relative">
                        <button className="flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                            hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                            border-zinc-300 dark:border-zinc-600"
                        onClick={() => setSelectedFilter(prev => prev === "location" ? "" : "location")}>
                                <FaLocationDot className="text-xl text-zinc-700 dark:text-zinc-300 mr-1" />Location</button> 
                            {selectedFilter === "location"&&
                                <LocationFilter 
                                    country={formData.country}
                                    region={formData.region}
                                    city={formData.city}
                                    subCity={formData.subCity}
                                    campus={formData.campus}
                                    landmark={formData.landmark}
                                    ref={dropdownRef}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={handleFilterChange}/>
                            }
                    </div>
                    <div className="relative">
                        <button className="flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                            hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                            border-zinc-300 dark:border-zinc-600"
                                onClick={() => setSelectedFilter(prev => prev === "rating" ? "" : "rating")}>
                                <FaStar className="text-xl text-zinc-700 dark:text-zinc-300 mr-1" />Rating</button>
                            {selectedFilter === "rating"&&
                                <RatingFilter 
                                    ratings={formData.rating}
                                    ref={dropdownRef}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={handleFilterChange}
                                />
                            }
                    </div>
                    <div className="relative">
                    <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}
                            onClick={() => setSelectedFilter(prev => prev === "subjects" ? "" : "subjects")}>
                            <FaBook className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>Subject</button>
                    </div>
                    <div className="relative">
                    <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}
                            onClick={() => setSelectedFilter(prev => prev === "gender" ? "" : "gender")}>
                            <BiMaleFemale className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>Gender</button>
                        {selectedFilter === "gender"&&
                            <GenderFilter
                                genders={formData.gender}
                                ref={dropdownRef}
                                onClick={(e) => e.stopPropagation}
                                onChange={handleFilterChange}/>
                        }
                    </div>
                    <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}>
                            <IoIosTime className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"
                            onClick={() => setSelectedFilter(prev => prev === "availability" ? "" : "availability")}/>Availability</button>
                    <div className="relative">
                        <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}
                                onClick={() => setSelectedFilter(prev => prev === "experience" ? "" : "experience")}>
                                <FaMountain className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>Experience</button>
                        {selectedFilter === "experience"&&
                            <ExperienceFilter
                                experience={formData.experience}
                                ref={dropdownRef}
                                onClick={(e) => e.stopPropagation()}
                                onChange={handleFilterChange}/>
                        }
                    </div>
                    <div className="relative">
                        <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}
                                onClick={() => setSelectedFilter(prev => prev === "education" ? "" : "education")}>
                                <IoIosSchool className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>Education</button>
                        {selectedFilter === "education"&&
                            <EducationFilter
                                education={formData.education}
                                ref={dropdownRef}
                                onClick={(e) => e.stopPropagation()}
                                onChange={handleFilterChange}/>
                        }
                    </div>
                    <div className="relative">
                        <button className={`flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                        bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                        hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                        border-zinc-300 dark:border-zinc-600 ${isVisible}`}
                                onClick={() => setSelectedFilter(prev => prev === "format" ? "" : "format")}>
                                <FaChalkboardTeacher className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>Format</button>
                        {selectedFilter === "format"&&
                            <FormatFilter
                                format={formData.format}
                                ref={dropdownRef}
                                onClick={(e) => e.stopPropagation()}
                                onChange={handleFilterChange}/>
                        }
                    </div>
                </div>
                <div className="hidden flex flex-col items-center max-sm:block">
                        <button className="flex text-sm font-medium text-zinc-600 dark:text-zinc-300
                            bg-zinc-100 dark:bg-zinc-800 p-2 m-2 border-2 rounded-xl cursor-pointer
                            hover:scale-105 hover:bg-zinc-200 hover:dark:bg-zinc-600 transition duration-100
                            border-zinc-300 dark:border-zinc-600"
                                onClick={() => setIsVisible(prev => prev === "max-sm:hidden" ? "" : "max-sm:hidden")}>
                                <PiDotsThreeCircleFill className="text-xl text-zinc-700 dark:text-zinc-300 mr-1"/>
                                {isVisible === "max-sm:hidden"&&
                                    "Show More"
                                }
                                {isVisible === ""&&
                                    "Show Less"
                                }
                                </button>
                </div>
            </div>
            {/* <div className="md:grid md:grid-cols-4 items-center justify-center gap-4 mx-4 mb-8"> */}
                {/* Filters */}
                
                {/* Tutors List */}
                <div className="col-span-3 flex flex-row items-center justify-center flex-wrap w-full">
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                </div>
            {/* </div> */}
        </MainLayout>
    </>
  )
}

export default TutorsList;