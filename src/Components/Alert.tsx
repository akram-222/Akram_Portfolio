import { BsFillInfoCircleFill } from "react-icons/bs";
type alert = {
  msg: string;
  detailedMsg: string;
};
const Alert = ({ msg, detailedMsg }: alert) => {
  return (
    <div className="fixed top-2 max-w-[400px] -translate-x-1/2 left-1/2 p-4 mb-4 text-red-900 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-900">
      <div className="flex items-center">
        <BsFillInfoCircleFill className="mr-2" size={20} />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{msg}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{detailedMsg}</div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <svg
            aria-hidden="true"
            className="-ml-0.5 mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          View more
        </button>
        <button
          type="button"
          className="text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-400 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:focus:ring-red-800"
          data-dismiss-target="#alert-additional-content-2"
          aria-label="Close"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Alert;
