import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
const Calendar = ({ isHidden }) => {
  const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"];
  const monthDays: number[] = []; // Fix Issue => What is "not assignable to parameter of type never" error in TypeScript?
  for (let i: number = 1; i <= 30; i++) {
    monthDays.push(i);
  }
  return (
    <>
      <div
        className={`${
          isHidden ? "" : ""
        } absolute w-full h-full top-0 left-0 z-10 calendar-backdrop flex items-center justify-center py-8 px-4`}
      >
        <div className="max-w-sm w-full shadow-lg">
          <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="flex items-center justify-between">
              <span
                tabIndex={0}
                className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              >
                October 2020
              </span>
              <div className="flex items-center">
                <button
                  aria-label="calendar backward"
                  className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                >
                  <BiChevronLeft size={25} />
                </button>
                <button
                  aria-label="calendar forward"
                  className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                >
                  <BiChevronRight size={25} />
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 gap-y-2 items-center flex-wrap pt-6 overflow-x-auto">
              {weekdays.map((day) => {
                return (
                  <div className="w-8 h-8 flex items-center dark:text-gray-100 justify-center">
                    {day}
                  </div>
                );
              })}

              {["", "", "", ...monthDays].map((day) => {
                return (
                  <div
                    className={`${
                      day.toString().length
                        ? "dark:hover:bg-[#050708]/40  cursor-pointer dark:hover:text-blue-400"
                        : ""
                    } ${
                      day === new Date().getDate()
                        ? "dark:bg-[#050708]/40 dark:text-rose-400 dark:hover:text-rose-400 font-semibold"
                        : ""
                    } rounded w-8 h-8 flex items-center justify-center`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <a
                  href="#d"
                  tabIndex={0}
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
