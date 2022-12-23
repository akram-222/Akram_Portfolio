import clsx from "clsx";
import SidebarIcons from "./SidebarIcons";
import { Link } from "react-router-dom";
function MenuItem({ item: { id, title, notifications }, onClick, selected }) {
  return (
    <Link to={title.toLowerCase()}
      className={clsx(
        "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
        selected === id ? "sidebar-item-selected" : "sidebar-item"
      )}
      onClick={() => onClick(id)}
    >
      <SidebarIcons id={id} />
      <span className="block sm:hidden xl:block ml-2">
        {title}
      </span>
      <div className="block sm:hidden xl:block flex-grow" />
      {notifications && (
        <div className="flex sm:hidden xl:flex dark:bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
          <div className="text-white text-sm">{notifications}</div>
        </div>
      )}
    </Link>
  );
}

export default MenuItem;
