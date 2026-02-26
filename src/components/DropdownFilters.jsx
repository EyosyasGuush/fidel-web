import DropdownContainer from "./DropdownContainer";
import { forwardRef } from "react";

const PriceFilter = forwardRef(function PriceFilter(
  { min, max , onChange, onClick}, ref) {
  return (
    <DropdownContainer>
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Set a price range
      </p>
      <div className="flex flex-col items-center gap-2">
        <input
          type="number"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Min"
          value={min}
          onChange={(e) =>
            onChange("minPrice", Number(e.target.value))
          }
        />
        <input
          type="number"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Max"
          value={max}
          onChange={(e) =>
            onChange("maxPrice", Number(e.target.value))
          }
        />
      </div>
    </div>
    </DropdownContainer>
  );
})

export const LocationFilter = forwardRef(function LocationFilter(
  { country, region, city, subCity, campus, landmark, onChange, onClick}, ref) {
  return (
    <DropdownContainer>
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Set a location
      </p>
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Country"
          value={country}
          onChange={(e) =>
            onChange("country", e.target.value)
          }
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Region"
          value={region}
          onChange={(e) =>
            onChange("region", e.target.value)
          }
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="City"
          value={city}
          onChange={(e) =>
            onChange("city", e.target.value)
          }
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Sub City"
          value={subCity}
          onChange={(e) =>
            onChange("subCity", e.target.value)
          }
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Campus"
          value={campus}
          onChange={(e) =>
            onChange("campus", e.target.value)
          }
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm"
          placeholder="Landmark"
          value={landmark}
          onChange={(e) =>
            onChange("landmark", e.target.value)
          }
        />
      </div>
    </div>
    </DropdownContainer>
  );
})

export const RatingFilter = forwardRef(function RatingFilter(
  {  ratings, onChange, onClick}, ref) {
  return (
    <DropdownContainer className="right-0 w-56">
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Select ratings
      </p>
      <div className="flex flex-row items-center">
        {[1,2,3,4,5].map((rating) => {
          const isSelected = ratings.includes(rating);
          return (
            <button
              key={rating}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("rating", rating);
              }}
              className={`px-3 py-1 rounded-lg border transition ml-1
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${isSelected
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              {rating}
            </button>
          )
        })
        }
      </div>
    </div>
    </DropdownContainer>
  );
})

export const GenderFilter = forwardRef(function GenderFilter(
  {  genders, onChange, onClick}, ref) {
  return (
    <DropdownContainer className="right-0 w-32">
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Select gender
      </p>
      <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("gender", "male");
              }}
              className={`px-3 py-1 rounded-lg border transition mx-2
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${genders.includes("male")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("gender", "female");
              }}
              className={`px-3 py-1 rounded-lg border transition ml-1
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${genders.includes("female")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              Female
            </button>
      </div>
    </div>
    </DropdownContainer>
  );
})

export const ExperienceFilter = forwardRef(function ExperienceFilter(
  { experience, onChange, onClick}, ref) {
  return (
    <DropdownContainer>
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Set years of experience
      </p>
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          className="w-full p-2 border rounded-md text-sm "
          placeholder="1"
          value={experience}
          onChange={(e) =>
            onChange("experience", e.target.value)
          }
        />
      </div>
    </div>
    </DropdownContainer>
  );
})

export const EducationFilter = forwardRef(function EducationFilter(
  {  education, onChange, onClick}, ref) {
  return (
    <DropdownContainer className="right-0">
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Select education level
      </p>
      <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("education", "middleSchool");
              }}
              className={`px-3 py-1 rounded-lg border transition mb-2 w-full whitespace-nowrap
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${education.includes("middleSchool")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              Middle School
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("education", "highSchool");
              }}
              className={`px-3 py-1 rounded-lg border transition mb-2 w-full whitespace-nowrap
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${education.includes("highSchool")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              High school
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("education", "college");
              }}
              className={`px-3 py-1 rounded-lg border transition mb-1 w-full whitespace-nowrap
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${education.includes("college")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              College
            </button>
      </div>
    </div>
    </DropdownContainer>
  );
})

export const FormatFilter = forwardRef(function FormatFilter(
  {  format, onChange, onClick}, ref) {
  return (
    <DropdownContainer className="right-0">
    <div className="dropdown" onClick={onClick} ref={ref}>
      <p className="text-sm mb-2 font-semibold">
        Select your class format
      </p>
      <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("format", "in-person");
              }}
              className={`px-3 py-1 rounded-lg border transition mb-2 w-full whitespace-nowrap
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${format.includes("in-person")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              In-person
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("format", "online");
              }}
              className={`px-3 py-1 rounded-lg border transition mb-1 w-full whitespace-nowrap
                text-zinc-800 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800
                  hover:dark:text-zinc-300 hover:dark:bg-zinc-700
                  ${format.includes("online")
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200"
                  }`}
            >
              Online
            </button>
      </div>
    </div>
    </DropdownContainer>
  );
})

export default PriceFilter;