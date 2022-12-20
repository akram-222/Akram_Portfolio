import { BsCalendarDate, BsCodeSlash } from "react-icons/bs";
const ProjectItem = ({ name, createdAt, language, fork, visibility, i,repoConfig }) => {
  return (
    // <div
    //   className={`border relative w-full sm:w-[49%] xl:w-[32%] bg-white rounded-lg shadow-md px-4 dark:bg-[#171717] dark:border-[#353535] py-3`}
    // >
    <div
      className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white rounded-lg shadow-md px-4 dark:bg-[#171717] dark:border-[#353535] py-3`}
    >
      {/* <div className="w-12 h-12 text-center flex justify-center text-white flex items-center absolute rounded-full p-3 shadow-xl bg-sidebar-card-top left-4 -top-6"> */}
      {/* <AiOutlineFundProjectionScreen size={30} /> */}
      {/* <span className="font-bold text-2xl">{i + 1}</span> */}
      {/* </div> */}
      <div className="">
        <div className=" flex justify-between items-center">
          <span className="text-white font-semibold my-2 whitespace-nowrap overflow-hidden w-2/3 text-ellipsis">
            {repoConfig.page === 1
  ? i + 1
  : repoConfig.page === 2
  ? i + 1 + repoConfig.per_page
  : repoConfig.page === 3
  ? i + 1 + repoConfig.per_page * 2
  : repoConfig.page === 4
  ? i + 1 + repoConfig.per_page * 3
  : ""}. {name.replace('-'," ")}
          </span>
          <span
            className={`${
              visibility === "public" ? "text-green-500" : "text-rose-500"
            } border py-1 px-2 rounded-full text-sm border-[#353535]`}
          >
            {visibility}
          </span>
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
