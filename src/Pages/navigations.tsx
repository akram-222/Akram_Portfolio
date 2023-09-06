import { useMemo, useCallback } from "react";
import sidebarItems from "../Components/SidebarItems";
import { Link, useNavigate } from "react-router-dom";

const Navigations = () => {
  const navigate = useNavigate();


  const memoizedSidebarItems = useMemo(
    () => [...sidebarItems[0], ...sidebarItems[1]],
    []
  );
  return (
    <div className="flex flex-col pt-10">
       <h2 className="text-center text-gray-500 font-semibold">
          Browse one of our Components
        </h2>
      <div className="gap-3 p-5 w-full h-fit flex flex-wrap justify-center">
        {memoizedSidebarItems.map((item, i) => (
        <div
          key={i}
          onClick={() => navigate(`/${item.title.toLocaleLowerCase()}`)}
          className={`text-xs overflow-hidden relative dark:hover:bg-[#050708]/ p-4 w-24 h-24  rounded-lg cursor-pointer border border-gray-600/60 dark:bg-gray-700/20 dark:border-gray-700/50`}
        >
          {/* {i === 4 ? (
                <div className="bottom-1 right-1 absolute text-xs text-yellow-500">
                  <span className="">Building...</span>
                </div>
              ) : (
                ""
              )} */}
          <div
            className={`p-2 mx-auto mb-2 max-w-[48px] ${item.bgColor} rounded-full `}
          >
            {item.icon}
          </div>
          <div
            className={`font-extrabold text-center text-gray-500 ${item.textColor}`}
          >
            {item.title}
          </div>
        </div>
      ))}</div>
    </div>
  );
};
export default Navigations;
