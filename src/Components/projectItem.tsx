import { Link } from "react-router-dom";
import {
  AiOutlineBook,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsDashCircle } from "react-icons/bs";
import { VscIssueDraft, VscIssues } from "react-icons/vsc";

const ProjectItem = ({
  name,
  createdAt,
  language,
  fork,
  visibility,
  hasIssues,
  forksCount,
  i,
  repoConfig,
}) => {
  const indexingSys =
    i + 1 + repoConfig.per_page * (repoConfig.page - 1) || i + 1;
  return (
    <tr className="hover:bg-[#050708]/20">
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          {indexingSys}. {name.replace("-", " ")}
        </div>
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <div className="flex">
          {fork ? (
            <>
              <BiGitRepoForked size={18} className="dark:text-green-500" />
              <span className="xs:block hidden ml-2">Frok</span>
            </>
          ) : language ? (
            <>
              <img
                className="w-5 h-5 rounded"
                src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${language?.toLowerCase()}/${language?.toLowerCase()}.png`}
                alt={language}
              />
              <span className="xs:block hidden ml-2">{language}</span>
            </>
          ) : name.toLowerCase() === "Ak-ram".toLocaleLowerCase() ? (
            <>
              <AiOutlineBook size={18} className="dark:text-blue-500" />
              <span className="xs:block hidden ml-2">README File</span>
            </>
          ) : (
            <>
              <BsDashCircle size={18} className="dark:text-red-500" />
              <span className="xs:block hidden ml-2"> Empty Repo</span>
            </>
          )}
        </div>
      </td>

      <td className=" sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <span className="text-xs text-gray-600 mr-1">{forksCount}</span>
        <BiGitRepoForked
          size={18}
          className="inline dark:text-green-500 mr-1"
        />
        {/* {visibility === "public" ? (
          <AiOutlineEye size={23} className="inline dark:text-green-500 mx-1" />
        ) : (
          <AiOutlineEyeInvisible
            size={23}
            className="inline dark:text-red-500 mx-1"
          />
        )} */}
        {hasIssues ? (
          <VscIssues size={18} className="inline dark:text-green-500 mx-1" />
        ) : (
          <VscIssueDraft size={18} className="inline dark:text-red-500 mx-1" />
        )}
      </td>
      <td className="flex sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          <div className="sm:flex hidden flex-col">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            <div className="text-gray-400 text-xs">
              {new Date(createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          {/* <BsCalendarDate size={18} /> */}
          <span className="sm:hidden p-1 rounded border-gray-600/40">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </span>
        </div>
        <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-2 xs:ml-auto">
          <Link to={name.toLowerCase()}>
            <AiOutlineInfoCircle size={18} className="text-yellow-500" />
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default ProjectItem;
