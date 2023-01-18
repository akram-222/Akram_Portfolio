import { AiOutlineDelete } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import ConfirmDeletionMsg from "./ConfirmDeletionMsg";
import { VscIssues, VscIssueDraft } from "react-icons/vsc";
const RepoItem = ({
  children,
  index,
  name,
  size,
  has_issues,
  svn_url,
  isRepoDeleted,
  createdAt,
}) => {
  return (
    <div
      className="animate-fade-in-top flex items-center mt-3 relative show-repo-size"
      key={index}
    >
      <div className="">{index + 1}</div>

      {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
      <div
        data-hint={`⌛ Since : ${new Date(createdAt).toLocaleDateString(
          "en-US",
          { year: "2-digit", month: "short" }
        )}`}
        className="showHint cursor-help flex-grow ml-2 whitespace-nowrap text-ellipsis mr-3 w-30"
      >
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
      {has_issues ? (
        <VscIssues size={18} className="dark:text-green-500 mx-1" />
      ) : (
        <VscIssueDraft size={18} className="dark:text-red-500 mx-1" />
      )}

      <button
        data-popover-target="popover-hover"
        data-popover-trigger="hover"
        type="button"
        onFocus={(e) =>
          e?.currentTarget?.children[1]?.classList.remove("invisible")
        }
        onBlur={() =>
          setTimeout(
            (e) => e?.currentTarget?.children[1]?.classList.add("invisible"),
            1000
          )
        }
        className="dark:text-red-500 px-1 text-center"
      >
        <AiOutlineDelete />
        <ConfirmDeletionMsg isRepoDeleted={isRepoDeleted}>
          {children}
        </ConfirmDeletionMsg>
      </button>

      {/* ///////////////////////// */}
    </div>
  );
};

export default RepoItem;
