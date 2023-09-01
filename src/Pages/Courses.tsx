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
      <section className="flex w-full h-full relative">
        <h1 className='w-full text-2xl text-blue-100 uppercase font-bold'>This is a list of course notes</h1>
      </section>
    </div>
  );
};

export default Courses;
