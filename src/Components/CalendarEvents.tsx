import { BsCheckCircle } from "react-icons/bs";

const CalendarEvents = () => {
  interface taskType {
    title:string,
    isDone: boolean,
    time: "string"
  }
  const [tasks,setTasks] = useState<taskType[]>([{title:"",isDone:false,time:""}])
  return (
    <div className="hidden xl:block w-full max-w-sm py-6 px-3 border-b dark:border-gray-700/30">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Welcome
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Events that application book will appear here, click on an event to see
        the details and manage application events
      </p>
      <ul className="my-4 space-y-3">
       {tasks&&tasks.map(({title,isDone,time},i)=>  <li key={i} className="flex items-center p-1.5 dark:bg-[#171717] text-xs font-bold text-gray-900 bg-gray-50 group dark:text-white">
          <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-green-400 dark:bg-green-600/10 rounded">
            <BsCheckCircle className="mr-1" />
            {isDone}
          </span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
            {time}
          </span>
        </li>)}
      </ul>
      <button className="py-1 px-2 text-white dark:bg-[#1f6feb] dark:hover:bg-blue-700 rounded text-sm">
        New Event
      </button>
    </div>
  );
};

export default CalendarEvents;
