import { useEffect, useRef, useState } from "react";
import {
  BsCheck,
  BsCheckCircle,
  BsCheckCircleFill,
  BsCircleFill,
} from "react-icons/bs";

const SearchComponent = ({ list }) => {
  const [filteredList, setFilteredList] = useState(list);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const inputFeild = useRef<HTMLInputElement | null>(null);

  const filtering = (event: React.SyntheticEvent) => {
    setIsHidden(false);
    let input = (event.currentTarget as HTMLInputElement)!.value.toLowerCase();
    let res = list.filter((item) => {
      let itemName = item.name.toLowerCase();
      if (itemName === input) console.log("ddd");
      return itemName.includes(input);
    });

    setFilteredList(res);
  };

  return (
    <div className="relative">
      <input
        // onBlur={() => setIsHidden(true)}
        type={"search"}
        onInput={(e) => filtering(e)}
        className="cursor-text h-9 flex items-center block px-2 py-1 overflow-hidden dark:text-white font-semibold w-[220px] border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        ref={inputFeild}
      />
      <ul
        className={` ${
          isHidden ? "hidden" : ""
        } absolute z-20 mt-2 bg-white dark:bg-card dark:text-gray-300 w-full rounded`}
      >
        <span className="text-xs text-yellow-400 block px-3 pt-3 pb-2 border-b border-b-gray-600/30">
          Results: {filteredList.length}
        </span>
        {filteredList.length ? (
          filteredList?.map((item) => (
            <li className="group p-2 flex items-center gap-2 hover:text-green-400 cursor-pointer text-sm hover:bg-gray-700/20">
              <BsCircleFill
                className="text-gray-700 group-hover:text-green-400"
                size={8}
              />{" "}
              {item.name}
              <span className="flex gap-1  text-green-400 inline-block ml-auto border-b border-b-gray-600/30 text-xs">
                <BsCheckCircleFill size={13} /> Identical
              </span>
            </li>
          ))
        ) : (
          <span className="p-1.5 block text-xs text-red-400 text-center">
            No items, try with another name
          </span>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
