import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";

interface ComboboxProps {
  options: string[];
  newEvent: any;
  setNewEvent: Dispatch<SetStateAction<any>>;
}

const Combobox: React.FC<ComboboxProps> = ({ options, newEvent, setNewEvent }) => {
  const [isCollapsed, setCollapsing] = useState(true);
  const [filteredRes, setFilteredRes] = useState<string[]>(options);
  const [value, setValue] = useState<string>("");

  const filterOptionsArray = (receivedValue: string): void => {
    const res = options.filter((item: string) =>
      item.toLowerCase().includes(receivedValue.toLowerCase())
    );
    setFilteredRes(res);
  };

  useEffect(() => {
    setNewEvent((prevEvent) => ({ ...prevEvent, priority: value }));
  }, [value]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const targetValue = e.currentTarget.value;
    setValue(targetValue);
    setCollapsing(false);
    filterOptionsArray(targetValue);
  };

  const resetSearchValue = () => {
    setValue("");
    filterOptionsArray("");
  };

  return (
    <div className="">
      <div className="">
        <div className="relative">
          <div className="dark:bg-transparent dark:border dark:border-gray-800 h-9 bg-white flex rounded items-center">
            <input
              onChange={handleSearchValue}
              value={value}
              name="select"
              id="select"
              placeholder="Filter by"
              className="dark:bg-transparent px-1.5 appearance-none outline-none text-gray-200 w-full"
            />
            <button
              type="button"
              onClick={resetSearchValue}
              className="border-r dark:border-gray-700 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-rose-400"
            >
              <IoIosClose />
            </button>
            <label
              onClick={() => setCollapsing(!isCollapsed)}
              htmlFor="show_more"
              className="cursor-pointer outline-none focus:outline-none border-gray-200 transition-all text-gray-300 hover:text-gray-400 mr-2 ml-1"
            >
              <IoIosArrowDown />
            </label>
            <input type="checkbox" name="show_more" id="show_more" className="hidden" />
            <div
              className={`${
                isCollapsed || !filteredRes.length ? "hidden" : ""
              } slide-bottom absolute dark:border-[#353535] rounded shadow bg-white overflow-hidden flex-col w-full mt-1 border border-gray-200`}
            >
              {filteredRes.map((option: string) => (
                <div
                  key={option}
                  className="cursor-pointer group block border-l-4 dark:bg-card dark:border-b dark:border-b-[#353535] border-l-transparent dark:hover:text-blue-400 hover:border-blue-600 p-2"
                  onClick={() => {
                    setCollapsing(true);
                    setValue(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combobox;