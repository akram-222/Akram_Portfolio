import { FaFilter } from "react-icons/fa";
import RadioItem from "./RadioItem";
import Combobox from "./Combobox";
const Filter = () => {
  return (
    <>
      <header>
        <h3 className="flex gap-2 items-center text-blue-400 font-semibold ">
          <FaFilter />
          <span>Filters</span>
        </h3>
      </header>
      <div className="mt-3 ">
        <div className="">
          <span className="block mb-2 font-medium">By project name:</span>
          <input
            placeholder="ex; amazon"
            type="search"
            className="block w-full p-1.5 text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="divider border-b my-3 dark:border-[#353535]"></div>
        <div className="">
          <span className="block pb-1">Select Language:</span>
          <Combobox options={["Python", "JavaScript", "PHP", "Rust"]} />
        </div>
        {/* Visibility */}
        <div className="divider border-b my-3 dark:border-[#353535]"></div>
        <div className="">
          <span className="block mb-2 font-medium">Visibility:</span>
          <div className="visibility-list ml-4">
            <fieldset id="visibility-group">
              <RadioItem option={"public"} name="visibility-group"/>
              <RadioItem option={"private"} name="visibility-group"/>
              <RadioItem option={"all"} name="visibility-group"/>
            </fieldset>
          </div>
        </div>
        {/* Sorting */}
        <div className="divider border-b my-3 dark:border-[#353535]"></div>
        <div className="">
          <span className="block mb-2 font-medium">Sorting by:</span>
          <div className="sorting-list ml-4">
            <fieldset id="sorting-group">
              <RadioItem option={"creation date"} name="sorting-group"/>
              <RadioItem option={"last updated"} name="sorting-group"/>
              <RadioItem option={"first pushed"} name="sorting-group"/>
              <RadioItem option={"full name"} name="sorting-group"/>
            </fieldset>
          </div>
        </div>
        {/* Creatoin Date */}
        <div className="divider border-b my-3 dark:border-[#353535]"></div>
        <div className="">
          <span className="block mb-2 font-medium">Creation Date:</span>
          <div className="flex items-center gap-2 visibility-list ml-4">
            <Combobox options={["before", "after"]} />
            3002332
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
