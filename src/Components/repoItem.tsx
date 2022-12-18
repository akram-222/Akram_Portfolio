import { AiOutlineDelete } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import Icon from "./Icon";

const RepoItem = ({
    children,
  index,
  name,
  size,
  has_issues,
  svn_url,
  isRepoDeleted,
}) => {
  return (
    <div className="flex items-center mt-3 relative show-repo-size" key={index}>
      <div className="">{index + 1}</div>

      {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
      <div className="ml-2 whitespace-nowrap text-ellipsis mr-3 w-30">
        {name}
      </div>
      <div className="flex-grow" />
      <span
        className={`repo-size mr-3 text-sm whitespace-nowrap ${
          size > 2000
            ? "text-red-500"
            : size < 500
            ? "text-green-500"
            : "text-premium-yellow"
        }`}
      >
        {size} kb
      </span>
      <div className="">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={svn_url}
        >
          <BsLink45Deg />
        </a>
      </div>
      <Icon
        path={
          has_issues
            ? "res-react-dash-country-up"
            : "res-react-dash-country-down"
        }
        className="w-4 h-4 mx-1"
      />

      {/* //////////////// */}

      <button
        data-popover-target="popover-hover"
        data-popover-trigger="hover"
        type="button"
        onClick={(e) =>
          e?.currentTarget?.nextElementSibling?.classList.toggle("invisible")
        }
        className="dark:text-red-500 px-1 text-center"
      >
        <AiOutlineDelete />
      </button>
      <div
        data-popover
        id="popover-hover"
        role="tooltip"
        className={`${
          isRepoDeleted ? "invisible opacity-0" : ""
        } invisible absolute z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold dark:text-red-500 dark:text-white">
            Confirm Deletion
          </h3>
        </div>
        <div className="px-3 py-2 flex flex-col">
            <p>This Repo will permenantly delete</p>
           {children}
          </div> 
        <div data-popper-arrow></div>
      </div>
      {/* ///////////////////////// */}
    </div>
  );
};

export default RepoItem;
