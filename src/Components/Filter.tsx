import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import RadioItem from "./RadioItem";
import Combobox from "./Combobox";
import EmojiComponent from "./emojiComponent";
import Calendar from "./Calendar";
import { BsChevronExpand } from "react-icons/bs";
const Filter = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isEmojiComponentHidden, setIsEmojiComponentHidden] = useState(true);
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h3 className="flex gap-2 items-center text-blue-400 font-semibold ">
          <FaFilter />
          <span>Filters</span>
        </h3>
        <BsChevronExpand
          onClick={() => setCollapsed(!isCollapsed)}
          size={23}
          className={`lg:hidden cursor-pointer text-premium-yellow`}
        />
      </header>
      <div className={`${isCollapsed ? "xs:hidden" : ""} lg:block`}>
        <div className="my-3 relative">
          <span className="block mb-2 font-medium">By project name:</span>
          <EmojiComponent
            setIsEmojiComponentHidden={setIsEmojiComponentHidden}
            isEmojiComponentHidden={isEmojiComponentHidden}
          />
        </div>
        <div className="my-3">
          <span className="block pb-1">Select Language:</span>
          <Combobox options={["Python", "JavaScript", "PHP", "Rust"]} />
        </div>
        {/* Visibility */}
        <div className="my-3">
          <span className="block mb-2 font-medium">Visibility:</span>
          <div className="visibility-list ml-4">
            <fieldset id="visibility-group">
              <RadioItem className="" option={"public"} name="visibility-group" />
              <RadioItem className="" option={"private"} name="visibility-group" />
              <RadioItem className="" option={"all"} name="visibility-group" />
            </fieldset>
          </div>
        </div>
        {/* Sorting */}
        <div className="">
          <span className="block mb-2 font-medium">Sorting by:</span>
          <div className="sorting-list ml-4">
            <fieldset id="sorting-group">
              <RadioItem className="" option={"creation date"} name="sorting-group" />
              <RadioItem className="" option={"last updated"} name="sorting-group" />
              <RadioItem className="" option={"first pushed"} name="sorting-group" />
              <RadioItem className="" option={"full name"} name="sorting-group" />
            </fieldset>
          </div>
        </div>
        {/* Creatoin Date */}
        <div className="divider border-dashed border-b my-3 dark:border-[#353535]"></div>
        <div className="">
          <span className="block mb-2 font-medium">Creation Date:</span>
          <div className="flex items-center gap-2 visibility-list ml-4">
            <Combobox options={["before", "after"]} />
            <button
              onClick={() => setIsHidden(!isHidden)}
              className="border dark:border-[#353535] p-1.5 rounded dark:hover:text-blue-400 mx-1"
            >
              Date
            </button>
          </div>
          <Calendar isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
