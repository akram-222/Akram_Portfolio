import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {  BsCalendarDate } from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi"
const ProjectItem = () => {
  return (
    <div className="relative mr-auto w-full md:w-[45%] bg-white rounded-lg shadow-md px-4 dark:bg-[#171717] dark:border-gray-700 py-3 mb-8">
      <div className=" text-white flex items-center absolute rounded-full p-3 shadow-xl bg-green-500 left-4 -top-6">
      <AiOutlineFundProjectionScreen size={30} />
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">Web Design</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
         <HiOutlineLocationMarker size={20}/>
          <p>Core UI Team</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          <BsCalendarDate size={18}/>
          <p>3 Weeks Left</p>
        </div>
        <div className="border-t-2 "></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Team Member</p>
            <div className="flex space-x-2 relative">
              <img
                alt="some"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-6 h-6 left-0 absolute rounded-full"
              />
              <img
                alt="some"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-6 h-6 left-2 absolute rounded-full"
              />
              <img
                alt="some"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-6 h-6 left-6 absolute rounded-full"
              />
            </div>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Progress</p>
            <div className="text-base text-gray-400 font-semibold">
              <p className="text-center">76%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
