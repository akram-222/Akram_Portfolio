import { BsLayoutSidebarInset } from "react-icons/bs";
import {useState} from 'react';
const BreadCrumb = () => {
  const [isOpen,setOpen] = useState(false)

// Store isOpen in session storage
sessionStorage.setItem("isOpen", isOpen);

const toggle = ()=>{
          setOpen(!isOpen);
          sessionStorage.setItem('isOpen',!isOpen)}
// Get isOpen from session storage
// isOpen = sessionStorage.getItem("isOpen");
  return (
    <nav
      className="flex border border-gray-600/20 mb-3 py-1 px-3 rounded hidden sm:block"
      aria-label="Breadcrumb"
    >
      <ol className="flex sticky top-0 p-1 justify-between w-full items-center space-x-1 md:space-x-3">
        <li onClick={toggel} className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <BsLayoutSidebarInset size={23} />
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
