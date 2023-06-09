import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBook } from "react-icons/ai";
import { BiGitRepoForked, BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { VscIssueDraft, VscIssues } from "react-icons/vsc";
const ProjectItem = ({
  name,
  createdAt,
  language,
  fork,
  visibility,
  id,
  hasIssues,
  forksCount,
  i,
  repoConfig,
  currentHomePage,
  setCurrentHomePage,
  homepage,
  html_url,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const indexingSys =
    i + 1 + repoConfig.per_page * (repoConfig.page - 1) || i + 1;
  return (
    <tr
      // onDoubleClick={
      //   ()=> {
      //     setCurrentHomePage(homepage)
      //   }
      // }

      className="text-gray-400 group hover:bg-card border-b border-b-gray-200 border-l-4 dark:border-l-transparent dark:hover-border-l-5 dark:hover:border-l-blue-400 dark:border-gray-600/20"
    >
      <td className="sm:p-3 py-2 px-1 border-r border-r-gray-600/10">
        <div className="flex items-center">
          <span onClick={() => setIsSelected(!isSelected)}>
            {isSelected ? (
              <BiCheckboxSquare
                size={18}
                className="cursor-pointer  mr-2 lg:inline hover:text-white"
              />
            ) : (
              <BiCheckbox
                size={18}
                className="cursor-pointer  mr-2 lg:inline hover:text-white"
              />
            )}
          </span>
          <BsPlusCircle
            size={18}
            className="cursor-pointer group-hover:animate-fade-in hidden mr-2 lg:inline transition-all w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 hover:text-white"
          />
          <Link
            to={name.toLowerCase()}
            className="flex items-center justify-between underline-offset-2 hover:underline hover:text-blue-400"
          >
            {indexingSys}. {name}
          </Link>
          <a
            href={html_url}
            target={"blank"}
            className="ml-2 italic text-blue-400/30 hover:text-blue-400 hidden lg:inline opacity-0 group-hover:opacity-100 text-xs"
          >
            #{id}
          </a>
        </div>
      </td>
      <td className="sm:p-3 py-2 px-1 border-r border-r-gray-600/10">
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

      <td className=" sm:p-3 py-2 px-1 border-r border-r-gray-600/10">
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
          <VscIssues
            data-hint="has open issues"
            size={18}
            className="showHint inline dark:text-green-500 mx-1"
          />
        ) : (
          <VscIssueDraft
            data-hint="has no issues"
            size={18}
            className="showHint inline dark:text-red-500 mx-1"
          />
        )}
      </td>
      <td className="flex sm:p-3 py-2 px-1">
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
          <span className="sm:hidden p-1 border bg-card rounded border-gray-600/30">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </span>
        </div>
        {/* <button  className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-2 xs:ml-auto">
          <Link to={name.toLowerCase()}>
            <AiOutlineInfoCircle size={18} className="text-yellow-500" />
          </Link>
        </button> */}
      </td>
      {/* </Link> */}
    </tr>
  );
};

export default ProjectItem;
