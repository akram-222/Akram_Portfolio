import { useState } from "react";
import { BsCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";
type alert = {
  msg: string;
  detailedMsg: string;
  isHidden: boolean;
  setIsHidden: (arg: boolean) => void;
  changeMode: () => void;
};
const Alert = ({
  msg,
  detailedMsg,
  isHidden,
  setIsHidden,
  changeMode,
}: alert) => {
  const [isToggled, setToggled] = useState(true);
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } animate-scaleUpCenter fixed max-w-[400px] right-2 bottom-2 p-4 mb-4 text-red-900 rounded-lg bg-gray-800 text-red-400`}
    >
      <div className="flex items-center">
        <BsFillInfoCircleFill className="mr-2" size={20} />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{msg}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-300">{detailedMsg}</div>
      <div className="flex items-center">
        <TbSwitch2
          onClick={() => setToggled(!isToggled)}
          className="cursor-pointer text-gray-700 mr-3 hover:text-gray-100"
          size={23}
        />
        {isToggled ? (
          <button
            type="button"
            className="group text-white border border-gray-700 hover:border-green-400 hover:text-green-400 rounded text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
            onClick={() => changeMode()}
          >
            <BsCircleFill
              className="mr-1 group-hover:text-green-400"
              size={8}
            />
            Recommended dark mode
          </button>
        ) : (
          <button
            type="button"
            className="border font-medium rounded text-xs px-3 py-1.5 text-center hover:bg-red-400 border-red-400 text-red-400 hover:text-white"
            onClick={() => setIsHidden(true)}
          >
            Keep going to light mode
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
