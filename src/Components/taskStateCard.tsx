import { BsCheckCircle } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const TaskStateCard = ({ tasks }) => {
  return (
    <>
      {tasks.map(({ title, isDone, time }, i: number) => (
        <li
          key={i}
          className="flex items-center p-1.5 dark:bg-[#171717] text-xs font-bold text-gray-900 bg-gray-50 group dark:text-white"
        >
          <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium rounded">
            {isDone ? (
              <span className="text-green-400 dark:bg-green-600/10">
                <BsCheckCircle className="mr-1" />
                Done
              </span>
            ) : (
              <span className="text-red-400 dark:bg-red-600/10">
                <IoIosClose className="mr-1" />
                Pind
              </span>
            )}
          </span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
            {time}
          </span>
        </li>
      ))}
    </>
  );
};

export default TaskStateCard;
