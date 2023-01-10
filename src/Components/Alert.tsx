import { BsCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdRecommend } from "react-icons/md";
import { VscCircleOutline } from "react-icons/vsc";
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
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } fixed top-2 max-w-[400px] -translate-x-1/2 left-1/2 p-4 mb-4 text-red-900 rounded-lg bg-gray-800 text-red-400`}
    >
      <div className="flex items-center">
        <BsFillInfoCircleFill className="mr-2" size={20} />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{msg}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-300">{detailedMsg}</div>
      <div className="flex">
        <button
          type="button"
          className="group text-white border border-gray-700 hover:border-green-400 hover:text-green-400 rounded text-sm px-3 py-1.5 mr-2 text-center inline-flex items-center"
          onClick={() => changeMode()}
        >
          <BsCircleFill className="mr-1 group-hover:text-green-400" size={10} />
          Dark mode
        </button>

        <button
          type="button"
          className="border font-medium rounded text-xs px-3 py-1.5 text-center hover:bg-red-400 border-red-400 text-red-400 hover:text-white"
          onClick={() => setIsHidden(true)}
        >
          Keep going to light mode
        </button>
      </div>
    </div>
  );
};

export default Alert;
