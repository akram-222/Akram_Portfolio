import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import Filter from "../Components/Filter";
import ProjectItem from "../Components/projectItem";
import Skelton from "../Components/Skelton";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import Pagination from "../Components/Pagination";

const Projects = ({ onSidebarHide }) => {
  const [repoConfig, setRepoConfig] = useState({ per_page: 12 });
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
      <div className="flex  w-full flex-col lg:flex-row">
        <div className="tilt-in-left-1 projects-list w-full flex flex-wrap gap-2">
          {isLoad ? (
            <Skelton
              number={repoConfig.per_page}
              className={`border relative w-full xs:w-[49%] md:w-[32%] bg-white shadow-md dark:bg-[#171717] dark:border-[#353535]`}
            />
          ) : (
            repos?.map(
              ({ name, id, created_at, language, fork, visibility }, i) => (
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
              )
            )
          )}
          <Pagination
            isLoad={isLoad}
            setLoad={setLoad}
            repoConfig={repoConfig}
            setRepoConfig={setRepoConfig}
            repos={repos}
            className="w-full"
          />
        </div>
        <div className="tilt-in-right-1 order-first lg:order-last filters lg:flex-grow dark:bg-[#171717] rounded-lg px-4 py-4 mb-2">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Projects;
