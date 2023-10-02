import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import ProjectItem from "../Components/projectItem";
import FilterProjects from "../Components/FilterProjects";
import Skelton from "../Components/Skelton";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import Pagination from "../Components/Pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import RepoDetails from "./RepoDetails";
// import SearchComponent from "../Components/search comp/SearchComponent";




const Projects = () => {
  const [repoConfig, setRepoConfig] = useState({ per_page: 12, page: 1 });
  const [repos, setRepos] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [isVisible, setVisibility] = useState(false);
  const [currentHomePage, setCurrentHomePage] = useState("");
  const [isView, setViewer] = useState(false)
  const [repoToViewIndex, setrepoToViewIndex] = useState(0)
  useEffect(() => {
    __getListOfRepos(repoConfig).then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoad(false);
      console.log(fetchedRepos);
    });
  }, [repoConfig]);

  return (
    <div className="animate-fade-in flex-col items-start w-full flex-wrap">
      {/* <iframe style={{

zIndex: '-1',
opacity: '0.3',
mixBlendMode: 'overlay'
       }} src={currentHomePage} 
       className="absolute h-full w-full"
       title="W3Schools Free Online Web Tutorials"></iframe> 
        */}
      <PageTitle
        className={"h-fit"}
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
        is_premium={false}
        premium_star=""
      />
      <div className="flex w-full flex-col lg:flex-row">
        <div className="projects-list w-full flex flex-wrap gap-2">
          <div className="w-full">
            <div className="flex relative items-center">

              <Pagination
                isLoad={isLoad}
                setLoad={setLoad}
                repoConfig={repoConfig}
                setRepoConfig={setRepoConfig}
                repos={repos}
                className="w-full"
              />
            </div>
            {isView ? <RepoDetails repos={repos} repoToViewIndex={repoToViewIndex} setViewer={setViewer} /> : <table className="w-full text-left text-xs md:text-sm ">
              <thead className="mb-2">
                <tr className="border-b border-b-gray-500/60 bg-gray-700 dark:bg-card">
                  <th className="p-3 w-[45%] border-r text-white border-r-gray-600/20">
                    <div className="flex justify-between items-center">
                      <span>Project Name</span>
                      <BsFilterRight
                        className="cursor-pointer"
                        size="16"
                        onClick={() => setVisibility(!isVisible)}
                      />
                    </div>
                  </th>
                  <th className="flex items-center justify-center xs:block p-3 border-r text-white border-r-gray-600/20">
                    <div className="flex justify-between items-center">
                      <span>
                        Lang<span className="hidden xs:inline-block">uage</span>
                      </span>
                      {/* <BsFilterRight size='16' /> */}
                    </div>
                  </th>
                  <th className="p-3 border-r text-white border-r-gray-600/20">
                    <div className="flex justify-between items-center">
                      <span>Info</span>
                      {/* <BsFilterRight size='16' /> */}
                    </div>
                  </th>
                  <th className="w-full p-3 hidden sm:inline-block  text-white">
                    <div className="flex justify-between items-center">
                      <span>Date</span>
                      {/* <BsFilterRight size='16' /> */}
                    </div>
                  </th>
                </tr>{" "}
              </thead>
              {isVisible ? <FilterProjects repos={repos} /> : null}
              {/* <thead>
                <tr className="text-gray-400">
                  {["Name", "Language", "Details", "Date"].map(
                    (item, index) => (
                      <th
                        key={index}
                        className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                      >
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead> */}
              <tbody className="text-gray-600 dark:text-gray-100">
                {/* <Skelton
                    number={repoConfig.per_page}
                    className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white shadow-md dark:bg-[#171717] dark:border-[#353535]`}
                  /> */}
                {isLoad ? (
                  <Skelton
                    number={repoConfig.per_page - 1}
                    className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white shadow-md dark:bg-[#171717]/30 dark:border-[#353535]`}
                  />
                ) : (
                  repos?.map(
                    (
                      {
                        name,
                        id,
                        created_at,
                        language,
                        fork,
                        visibility,
                        has_issues,
                        forks_count,
                        homepage,
                        html_url,
                      },
                      i: number
                    ) => (
                      <>
                        <ProjectItem
                          key={i}
                          name={name}
                          id={id}
                          language={language}
                          fork={fork}
                          visibility={visibility}
                          hasIssues={has_issues}
                          forksCount={forks_count}
                          i={i}
                          createdAt={created_at}
                          repoConfig={repoConfig}
                          currentHomePage={currentHomePage}
                          setCurrentHomePage={setCurrentHomePage}
                          homepage={homepage}
                          html_url={html_url}
                          isView={isView}
                          setViewer={setViewer}
                          repoToViewIndex={repoToViewIndex}
                          setRepoToViewIndex={setrepoToViewIndex}
                        />
                      </>
                    )
                  )
                )}
              </tbody>
            </table>}


          </div>
        </div>
        {/* <div className=" order-first lg:order-last filters lg:flex-grow dark:bg-[#171717] rounded-lg px-4 py-4 mb-2">
          <Filter />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
