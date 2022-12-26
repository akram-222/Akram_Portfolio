import { AiOutlineBook, AiOutlineInfoCircle } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsDashCircle } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";

const ProjectItem = ({
  name,
  createdAt,
  language,
  fork,
  visibility,
  i,
  repoConfig,
}) => {
  const indexingSys =
    i + 1 + repoConfig.per_page * (repoConfig.page - 1) || i + 1;
  return (
    <tr className="hover:bg-[#050708]/20">
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          <AiOutlineInfoCircle size={20} className="mr-4 text-yellow-500" />
          {indexingSys}. {name.replace("-", " ")}
        </div>
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <div className="flex">
          {fork ? (
            <>
              <BiGitRepoForked size={20} className="dark:text-green-500 mr-2" />
              Fork
            </>
          ) : language ? (
            <>
              <img
                className="w-5 h-5 mr-2 rounded"
                src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${language?.toLowerCase()}/${language?.toLowerCase()}.png`}
                alt={language}
              />
              {language}
            </>
          ) : name.toLowerCase() === "Ak-ram".toLocaleLowerCase() ? (
            <>
              <AiOutlineBook size={22} className="dark:text-blue-500 mr-2" />
              README File
            </>
          ) : (
            <>
              <BsDashCircle size={20} className="dark:text-red-500 mr-2" />
              Empty Repo
            </>
          )}
        </div>
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
        Subscription renewal
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500">
        {visibility}
      </td>
      <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
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
          <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
            <IoIosMore />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProjectItem;
