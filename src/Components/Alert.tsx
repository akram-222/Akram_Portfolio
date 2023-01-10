import { BsFillInfoCircleFill, BsMoon } from "react-icons/bs";
import { MdRecommend } from "react-icons/md";
type alert = {
  msg: string;
  detailedMsg: string;
  isHidden: boolean;
  setIsHidden: (arg: boolean) => void;
};
const Alert = ({ msg, detailedMsg, isHidden, setIsHidden }: alert) => {
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } fixed top-2 max-w-[400px] -translate-x-1/2 left-1/2 p-4 mb-4 text-red-900 border border-red-300 rounded-lg bg-gray-800 text-red-400 dark:border-red-900`}
    >
      <div className="flex items-center">
        <BsFillInfoCircleFill className="mr-2" size={20} />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{msg}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{detailedMsg}</div>
      <div className="flex">
        <button
          type="button"
          className="bg-green-600/80 text-white rounded-lg text-sm px-3 py-1.5 mr-2 text-center inline-flex items-center"
        >
          <MdRecommend className="mr-1 " size={20} />
          Dark mode
        </button>
        <button
          type="button"
          className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-400 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:focus:ring-red-800"
          onClick={() => setIsHidden(true)}
        >
          Keep going to light mode
        </button>
      </div>
    </div>
  );
};

export default Alert;
