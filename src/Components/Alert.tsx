import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdRecommend } from "react-icons/md";
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
          className="bg-green-600/80 text-white rounded-lg text-sm px-3 py-1.5 mr-2 text-center inline-flex items-center"
          onClick={() => changeMode()}
        >
          <MdRecommend className="mr-1 " size={20} />
          Dark mode
        </button>
        <button
          type="button"
          className="border font-medium rounded-lg text-xs px-3 py-1.5 text-center hover:bg-red-400 border-red-400 text-red-400 hover:text-white"
          onClick={() => setIsHidden(true)}
        >
          Keep going to light mode
        </button>
      </div>
    </div>
  );
};

export default Alert;
