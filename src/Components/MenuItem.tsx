import SidebarIcons from "./SidebarIcons";
import { Link, useLocation } from "react-router-dom";
import cmdGif from "../assests/cmd.gif"
function MenuItem({ item: { id, title, notifications }, onClick }) {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1, location.pathname.length);
  return (
    // 🐛 BUG: matching selected sidebarItem with the current route

    // Bug: When changing route directly from the URL bar, there is no updating in the selected sidbarItem.
    // Solve: Use `useLocation` react hock to check if the current route matched with the selected sidebarItem or NOT.

    <Link
      to={
        title.toLowerCase() === "dashboard" ? "./signup" : title.toLowerCase()
      }
      className={`${
        title.toLowerCase() === currentRoute
          ? "sidebar-item-selected"
          : "sidebar-item"
      } text-gray-800 group flex-wrap dark:text-gray-500/80 hover:text-gray-600 dark:hover:text-blue-400 w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer`}
      onClick={() => onClick(id)}
    >
      <SidebarIcons id={id} />
      <span className="block sm:hidden xl:block ml-2">{title}</span>
      <div className="block sm:hidden xl:block flex-grow" />
      {notifications && (
        <div className="flex sm:hidden xl:flex dark:bg-blue-600 font-bold px-1 flex items-center justify-center rounded mr-2">
          <div className="text-white text-sm">{notifications}</div>
        </div>
      )}
      {/* {(id==='6')? (<div className='mt-5 group-hover:opacity-100 opacity-0 transition-all'> */}
      {(id==='6')? (<div className='border mt-5 overflow-hidden group-hover:opacity-100 opacity-0 transition-all'>
        <img className="transition-all shadow-xl hover:transform hover:scale-[4] hover:rotate-[-10deg] border-gray-600" src={cmdGif} width='200px'/>
      </div>)
      
      :null}
      </Link>
  );
}

export default MenuItem;
