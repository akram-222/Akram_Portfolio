import { IoIosCheckmark, IoIosClose } from "react-icons/io";

const EventStateComponent = ({ eventsList, setEventsList }) => {
  return (
    <>
      {eventsList.map(({ title, date, priority }, i: number) => (
        <li
          key={i}
          className="flex items-center p-1.5 dark:bg-[#171717] text-xs font-bold text-gray-900 bg-gray-50 group dark:text-white"
        >
          <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
          <span
            className={`
            ${
              priority === "Do first"
                ? "text-red-400 pl-2 dark:bg-red-600/10"
                : priority === "Schedule"
                ? "text-blue-400 pl-2 dark:bg-blue-600/10"
                : "text-yellow-400 pl-2 dark:bg-yellow-600/10"
            }
            inline-flex items-center pl-2`}
          >
            {priority}
            <IoIosCheckmark size={20} className="ml-1" />
          </span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
            {date}
          </span>
        </li>
      ))}
    </>
  );
};

export default EventStateComponent;
