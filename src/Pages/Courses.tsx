import { useState } from "react";
import Calendar from "../Components/Calendar";
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
        title="Courses"
        subtitle={
          <>
            <span className="text-green-500 mr-2">Handwritten :</span>
            <span className="text-gray-500">Course Notes to Improve Your Understanding</span>
          </>
        }
        is_premium={true}
        premium_star="Front-end"
      />
      <section className="flex flex-col w-full py-8 relative p-5 border border-dashed border-gray-600/60 mt-4">
        <h1 className='w-full text-center text-2xl text-blue-100 uppercase font-bold'>"This is a collection of course notes."</h1>
      <div className="flex flex-wrap gap-7 items-center justify-evenly mt-5">
        <a href="https://drive.google.com/drive/folders/1-grqXDjWYGLax2baBo8uTXVSoIh1o-_m?usp=sharing" className="w-36  h-36 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold text-2xl border border-transparent hover:border-red-400 hover:text-red-400">HTML</a>
        <a className="w-36  h-36 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] rotate-[15deg] hover:bg-card flex justify-center items-center font-bold text-2xl border border-transparent hover:border-cyan-400 hover:text-cyan-400">CSS</a>
        <a className="w-36  h-36 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold text-2xl border border-transparent hover:border-pink-400 hover:text-pink-400">SASS</a>
        <a href="https://drive.google.com/drive/folders/1n2qeZbG-2JiMoAJXQbJMYCeywjKbIVRN?usp=sharing" className="w-36  h-36 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] rotate-[15deg] hover:bg-card flex justify-center items-center font-bold text-2xl border border-transparent hover:border-yellow-400 hover:text-yellow-400">JavaScript</a>
        <a className="w-36  h-36 rounded-lg transition shadow-xl cursor-pointer bg-details p-2 hover:rotate-[0deg] rotate-[-15deg] hover:bg-card flex justify-center items-center font-bold text-2xl border border-transparent hover:border-blue-400 hover:text-blue-400">TypeScript</a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
