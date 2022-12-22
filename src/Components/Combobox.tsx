import { useState } from "react";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";
const Combobox = () => {
  const [isCollapsed, setCollapsing] = useState(true);
  const [value, setValue] = useState<string>("");
  const handleSearchValue = (e) => {
    const target = e.target as HTMLTextAreaElement;
    setValue(target.value);
    setCollapsing(false);
  };
  const resetSearchValue = () => {
    setValue("");
  };
  return (
    <div className="">
      <div className="max-w-md mx-auto">
        <label htmlFor="select" className="block py-2">
          Select Language:
        </label>

        <div className="relative">
          <div className="dark:bg-gray-800 h-10 bg-white flex rounded items-center">
            <input
              onInput={handleSearchValue}
              value={value}
              name="select"
              id="select"
              placeholder="Choose Language"
              className="dark:bg-gray-800 px-1.5 appearance-none outline-none text-gray-200 w-full"
            />
            <button
              onClick={resetSearchValue}
              className="border-r dark:border-gray-700 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-rose-400"
            >
              <IoIosClose size={25} />
            </button>
            <label
              onClick={() => setCollapsing(!isCollapsed)}
              htmlFor="show_more"
              className="cursor-pointer outline-none focus:outline-none  border-gray-200 transition-all text-gray-300 hover:text-gray-400 mr-2 ml-1"
            >
              <IoIosArrowDown size={18} />
            </label>
          </div>

          <input
            type="checkbox"
            name="show_more"
            id="show_more"
            className="hidden"
          />
          <div
            className={`${
              isCollapsed ? "hidden" : ""
            } absolute dark:border-[#353535] rounded shadow bg-white overflow-hidden flex-col w-full mt-1 border border-gray-200`}
          >
            {["Python", "JavaScript", "PHP", "Rust"].map((language) => {
              return (
                <div
                  className="cursor-pointer group block border-l-4 dark:bg-card dark:border-b dark:border-b-[#353535] border-l-transparent dark:hover:text-blue-400 hover:border-blue-600 p-2"
                  onClick={() => {
                    setCollapsing(true);
                    setValue(language);
                  }}
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combobox;
