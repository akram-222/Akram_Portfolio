import Steps from "./Steps";
import {BsArrowRightShort} from "react-icons/bs";
const AddNewEvent = () => {
  return (
    <div className="absolute z-20 flex items-center justify-center absolute top-0 w-full h-full dark:bg-[#171717]">
      <form className="border w-1/2 p-4  dark:border-gray-600/30 rounded-lg">
     <Steps />
        <div className="flex border-t dark:border-gray-600/30 flex-col items-start mb-6">
          <div className="w-full mt-3">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex w-full items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />

            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#d"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 text-blue-400 text-sm sm:w-auto px-3 py-1.5 text-center border dark:border-gray-600/30"
        >
          Next <BsArrowRightShort size={20} />
        </button>
      </form>
    </div>
  );
};

export default AddNewEvent;
