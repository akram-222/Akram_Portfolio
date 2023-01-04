import { useState } from "react";
import { useScroll } from "react-spring";
import Calendar from "../Components/Calendar";
import CalendarEvents from "../Components/CalendarEvents";
import EmojiComponent from "../Components/emojiComponent";
import ThemeSwitcherBtn from "../Components/themeSwitcherBtn";
const Settings = () => {
  interface eventType {
    title: string;
    isDone: boolean;
    time: string;
  }
  const [eventsList, setEventsList] = useState<eventType[]>([]);
  console.log(eventsList);
  return (
    <div className="flex">
      <aside>
        <CalendarEvents setEventsList={setEventsList} eventsList={eventsList} />
      </aside>
      {/* <Calendar daysClassName={"h-40"} /> */}
    </div>
  );
};

export default Settings;
