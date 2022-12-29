import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const BreadCrumb = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <ol className="inline-flex justify-between w-full items-center space-x-1 md:space-x-3">
        <li
          onClick={() => navigate(-1)}
          className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <BiChevronLeft size={23} />
          <span className="first-letter:uppercase">prev</span>
        </li>
        <li
          onClick={() => navigate(+1)}
          className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <span className="first-letter:uppercase">next</span>
          <BiChevronRight size={23} />
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
