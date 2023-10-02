import { useRef, useState } from "react";
import { BsCheck, BsCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchComponent = ({ list }) => {
  const [filteredList, setFilteredList] = useState(list);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [searchVal, setSearchVal] = useState<string>("");
  const [isIdentical, setIsIdentical] = useState<boolean>(false);
  const inputFeild = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const checkIdenticality = (input) => {
    filteredList.map((item) => {
      let itemName = item.name.toLowerCase();
      if (itemName === input) {
        setIsIdentical(true);
      } else {
        setIsIdentical(false);
      }
    });
  };
  const filtering = async (event: React.SyntheticEvent) => {
    setIsHidden(false);
    let input = (event.currentTarget as HTMLInputElement)!.value.toLowerCase();
    setSearchVal(input);
    let res = list.filter((item) => {
      let itemName = item.name.toLowerCase();
      return itemName.includes(input);
    });
    setFilteredList(res);
    checkIdenticality(input.toLowerCase());
  };

  return (
    <div className="relative text-white">
      Porject name:
      <input
        onBlur={() => setTimeout(() => setIsHidden(true), 200)}
        type={"search"}
        onChange={(e) => filtering(e)}
        className="mt-1 cursor-text flex items-center block px-2 py-1 overflow-hidden text-black dark:text-white text-sm w-[220px] border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500/30"
        placeholder="Search..."
        ref={inputFeild}
        value={searchVal}
      />
      <ul
        className={` ${
          isHidden ? "" : ""
        }  border-gray-400/50 h-56 overflow-auto z-20 mt-2  dark:bg-card dark:text-gray-300 w-full rounded`}
      >
        <span className="text-xs text-yellow-400 block pt-3 pb-2 border-b border-b-gray-600/30">
          Suggestions: {filteredList.length}
        </span>
        {filteredList.length ? (
          filteredList?.map((item, i: number) => (
            <li
              key={i}
              className="group slide-bottom p-2 flex items-center gap-2 cursor-pointer text-sm hover:bg-gray-700/20"
              onClick={() => {
                setSearchVal(item.name);
                setIsHidden(true);
                navigate(`./${item.name.toLowerCase()}`);
              }}
            >
              <BsCircleFill
                className="text-gray-700 group-hover:text-green-400"
                size={8}
              />{" "}
              {item.name}
              {isIdentical ? (
                <span
                  className={`flex gap-1 text-green-400 inline-block ml-auto text-xs`}
                >
                  <BsCheck size={20} />
                </span>
              ) : (
                ""
              )}
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
