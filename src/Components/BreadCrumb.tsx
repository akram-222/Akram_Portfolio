import { BsLayoutSidebarInset } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BreadCrumb = () => {
  return (
    <nav
      className="flex border border-gray-600/20 p-1 rounded hidden sm:block"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex justify-between w-full items-center space-x-1 md:space-x-3">
        <li
          className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <BsLayoutSidebarInset size={23} />
        </li>
        
      
      </ol>
    </nav>
  );
};
export default BreadCrumb;
