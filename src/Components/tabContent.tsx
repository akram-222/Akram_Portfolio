import { BsStars, BsVectorPen } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
const TabContent = ({ list }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-scroll min-w-max w-full table-auto">
        <thead>
          <tr className="text-blue-400 flex justify-between w-full text-sm leading-normal">
            <th className=" w-1/3 pt-3 pb-2 px-6 text-left flex gap-2">
              <BsStars size={17} /> Skill
            </th>
            <th className="justify-center w-1/3 pt-3 pb-2 px-6 text-left flex gap-2">
              <BsVectorPen size={17} /> Writes
            </th>
            <th className="justify-center w-1/3 pt-3 pb-2 px-6 text-left flex gap-2">
              <TbApps size={17} /> Projects
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {list?.map(({ skillIcon, skillName }, index: number) => (
            <tr
              key={index}
              className="border-b flex justify-between w-full border-gray-800/40"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap w-1/3">
                <div className="flex items-center">
                  <div className="mr-2">{skillIcon}</div>
                  <span className="font-medium">{skillName}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left w-1/3">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span>Eshal Rosas</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center w-1/3">
                <div className="flex items-center justify-center">
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabContent;
