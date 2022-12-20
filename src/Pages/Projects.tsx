import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import ProjectItem from "../Components/projectItem";
import Skelton from "../Components/Skelton";
import { __getListOfRepos } from "../Utils/github/__getListOfRepos";
import Pagination from "../Components/Pagination";
import { octokit } from "../Utils/github/OctokitConstructor";

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
    <div className="items-end p-2 sm:flex w-full flex-wrap">
      <PageTitle
        className={"mb-10"}
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
        <div className="projects-list w-full lg:w-2/3 flex flex-wrap gap-2">
          {isLoad ? (
            <Skelton number={5} className="mb-2 w-full md:w-[45%]" />
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
                />
              )
            )
          )}
        </div>
        <div className="order-first lg:order-last filters flex-grow dark:bg-[#171717] rounded-lg px-4 py-4 mb-2">
          Filters
        </div>
      </div>
      <Pagination
        isLoad={isLoad}
        setLoad={setLoad}
        repoConfig={repoConfig}
        setRepoConfig={setRepoConfig}
        repos={repos}
      />
    </div>
  );
};

export default Projects;
