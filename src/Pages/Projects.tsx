import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
// import Filter from "../Components/Filter";
import ProjectItem from "../Components/projectItem";
import Skelton from "../Components/Skelton";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import Pagination from "../Components/Pagination";
import { BsCalendar, BsCalendarDate } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";

const Projects = ({ onSidebarHide }) => {
  const [repoConfig, setRepoConfig] = useState({ per_page: 7 });
  const [repos, setRepos] = useState([]);
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    __getListOfRepos(repoConfig).then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoad(false);
    });
  }, [repoConfig]);

  return (
    <div className=" flex-col items-start p-2 w-full h-full flex-wrap">
      <PageTitle
        className={"mb-10 h-fit"}
        onSidebarHide={onSidebarHide}
        title="Projects"
        subtitle={
          <>
            <span className="text-green-500 mr-2">Follow :</span>
            <a
              className="text-sm text-blue-400 hover:underline"
              href="https://www.github.com/ak-ram"
            >
              GitHub Profile
            </a>
          </>
        }
        premium_star="GitHub Repos"
      />
      <div className="flex w-full flex-col lg:flex-row">
        <div className="projects-list w-full flex flex-wrap gap-2">
          <div className="w-full">
            <div className="flex w-full items-center mb-7">
              <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                <HiOutlineCalendar  className="mr-2" />
                Last 30 days
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                Filter by
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                <span className="mr-3">Page 2 of 4</span>
                <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  {["Name", "Type", "Description", "Visibility", "Date"].map(
                    (item) => (
                      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-100">
                {isLoad ? (
                  <Skelton
                    number={repoConfig.per_page}
                    className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white shadow-md dark:bg-[#171717] dark:border-[#353535]`}
                  />
                ) : (
                  repos?.map(
                    (
                      { name, id, created_at, language, fork, visibility },
                      i
                    ) => (
                      <>
                        <ProjectItem
                          name={name}
                          key={id}
                          fork={fork}
                          visibility={visibility}
                          i={i}
                          createdAt={created_at}
                          language={language}
                          repoConfig={repoConfig}
                        />
                      </>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            isLoad={isLoad}
            setLoad={setLoad}
            repoConfig={repoConfig}
            setRepoConfig={setRepoConfig}
            repos={repos}
            className="w-full"
          />
        </div>
        {/* <div className=" order-first lg:order-last filters lg:flex-grow dark:bg-[#171717] rounded-lg px-4 py-4 mb-2">
          <Filter />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
