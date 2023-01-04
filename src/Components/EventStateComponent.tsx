import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
const EventStateComponent = ({ eventsList, setEventsList }) => {
  return (
    <>
      {eventsList.map(({ title, date, priority }, i: number) => (
        <li
          key={i}
          className="flex rounded items-center p-1.5 dark:bg-[#171717] text-xs font-bold text-gray-900 bg-gray-50 group dark:text-white"
        >
          <span className="flex-1 ml-3 text-gray-300 whitespace-nowrap">{title}</span>

          <span
            className={`
          ${
            priority === "Do first"
              ? "text-red-400"
              : priority === "Schedule"
              ? "text-yellow-400"
              : "text-green-400"
          } inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium rounded`}
          >
            {date}
          </span>
          <span
            className={`
            ${
              priority === "Do first"
                ? "text-red-400"
                : priority === "Schedule"
                ? "text-yellow-400"
                : "text-green-400"
            }
            inline-flex items-center pl-2`}
          >
            {priority === "Do first" ? (
              <FcHighPriority size={17} />
            ) : priority === "Schedule" ? (
              <FcMediumPriority size={17} />
            ) : (
              <FcLowPriority size={17} />
            )}
            {/* <IoIosCheckmark size={20} className="ml-1" /> */}
          </span>
        </li>
      ))}
    </>
  );
};

export default EventStateComponent;
