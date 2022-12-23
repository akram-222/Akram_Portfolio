import { BsCalendarDate, BsCodeSlash } from "react-icons/bs";
import Badge from "./Badge";
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
    <div
      className={`scale-up-center h-[130.43px] border relative w-full xs:w-[49%] md:w-[32%] bg-white rounded shadow-md px-4 dark:bg-[#171717] dark:border-[#353535] py-3`}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold my-2 whitespace-nowrap overflow-hidden w-2/3 text-ellipsis">
            {indexingSys}. {name.replace("-", " ")}
          </span>

          {/* {visibility} */}
          <Badge visibility={visibility} />
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <BsCodeSlash size={20} />
          <p>
            {fork
              ? "Fork"
              : language
              ? language
              : name.toLowerCase() === "Ak-ram".toLocaleLowerCase()
              ? "README Profile"
              : "Empty Repo"}
          </p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          <BsCalendarDate size={18} />
          <p>
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
