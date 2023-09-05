import { useState } from "react";
import Calendar from "../Components/Calendar";
import {BsJournalBookmark } from 'react-icons/bs';
import CalendarEvents from "../Components/CalendarEvents";
import PageTitle from "../Components/PageTitle";
const Courses = () => {
  interface eventType {
    title: string;
    isDone: boolean;
    time: string;
  }
  const [eventsList, setEventsList] = useState<eventType[]>([]);
  return (
    <div className="animate-fade-in w-full">
      <PageTitle
        className={""}
        title={<>  <BsJournalBookmark size={25} className="mr-2" />Courses</>}
        subtitle={
          <>
            <span className="text-green-500 mr-2">Handwritten :</span>
            <span className="text-gray-500">
            
              Course Notes{" "}
              <span className="hidden sm:inline-block">
                to Improve Your Understanding
              </span>
            </span>
          </>
        }
        is_premium={false}
        premium_star=""
      />
      <section className="flex flex-col w-full py-8 relative p-5 mt-4">
        <h1 className="w-full text-center sm:text-2xl text-blue-100 uppercase font-bold">
          This is a collection of course notes
        </h1>
        <div className="flex flex-wrap gap-3 lg:gap-7 items-center lg:justify-center mt-8">
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1-grqXDjWYGLax2baBo8uTXVSoIh1o-_m?usp=sharing"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-red-400 hover:text-red-400"
          >
            HTML
          </a>
          <a
            target="_blank"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-cyan-400 hover:text-cyan-400"
          >
            CSS
          </a>
          <a
            target="_blank"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-pink-400 hover:text-pink-400"
          >
            SASS
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1n2qeZbG-2JiMoAJXQbJMYCeywjKbIVRN?usp=sharing"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-yellow-400 hover:text-yellow-400"
          >
            JavaScript
          </a>
          <a
            target="_blank"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-blue-400 hover:text-blue-400"
          >
            TypeScript
          </a>
          <a
            target="_blank"
            className="text-xs sm:text-base w-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] lg:rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold sm:text-2xl border border-transparent hover:border-blue-400 hover:text-blue-400"
          >
            Networks
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
