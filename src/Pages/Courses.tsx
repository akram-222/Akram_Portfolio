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
      <section className="flex flex-col w-full h-full relative p-5 border border-dashed border-gray-600/60 mt-4">
        <h1 className='w-full text-center text-2xl text-blue-100 uppercase font-bold'>"This is a collection of course notes."</h1>
      <div className="flex flex-wrap gap-4 items-center mt-5">
        <div className="w-36  h-36 rounded-lg shadow-xl cursor-pointer bg-details p-2 hover:rotate-[-10deg] hover:bg-card">1</div>
        <div className="w-36  h-36 rounded-lg shadow-xl cursor-pointer bg-details p-2 hover:rotate-[-10deg] hover:bg-card">1</div>
        <div className="w-36  h-36 rounded-lg shadow-xl cursor-pointer bg-details p-2 hover:rotate-[-10deg] hover:bg-card">1</div>
        <div className="w-36  h-36 rounded-lg shadow-xl cursor-pointer bg-details p-2 hover:rotate-[-10deg] hover:bg-card">1</div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
