import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
// import Filter from "../Components/Filter";
import ProjectItem from "../Components/projectItem";
import Skelton from "../Components/Skelton";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import Pagination from "../Components/Pagination";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Combobox from "../Components/Combobox";
import EmojiComponent from "../Components/emojiComponent";

const Projects = ({ onSidebarHide }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isEmojiComponentHidden, setIsEmojiComponentHidden] = useState(true);

  const [repoConfig, setRepoConfig] = useState({ per_page: 12, page: 1 });
  const [repos, setRepos] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    __getListOfRepos(repoConfig).then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoad(false);
      console.log(repos);
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
            <div className="flex relative items-center mb-7">
              <EmojiComponent
                isEmojiComponentHidden={isEmojiComponentHidden}
                setIsEmojiComponentHidden={setIsEmojiComponentHidden}
               
              />
              <Combobox
                options={[
                  "Name",
                  "Language",
                  "Description",
                  "Visibility",
                  "Date",
                ]}
              />
              <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                <span className="mr-3">Page {repoConfig.page} of 4</span>
                <button
                  onClick={() => {
                    setLoad(true);
                    setRepoConfig({
                      ...repoConfig,
                      page: repoConfig.page === 1 ? 1 : repoConfig.page - 1,
                    });
                  }}
                  className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => {
                    setLoad(true);
                    setRepoConfig({
                      ...repoConfig,
                      page: repoConfig.page === 4 ? 4 : repoConfig.page + 1,
                    });
                  }}
                  className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  {[
                    "Name",
                    "Language",
                    "Description",
                    "Visibility",
                    "Date",
                  ].map((item, index) => (
                    <th
                      key={index}
                      className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-100">
                {/* <Skelton
                    number={repoConfig.per_page}
                    className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white shadow-md dark:bg-[#171717] dark:border-[#353535]`}
                  /> */}
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
                          language={language}
                          key={id + i}
                          fork={fork}
                          visibility={visibility}
                          i={i}
                          createdAt={created_at}
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
