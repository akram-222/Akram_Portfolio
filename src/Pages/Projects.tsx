import { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import ProjectItem from "../Components/projectItem";
import { octokit } from "../Utils/github/OctokitConstructor";

const Projects = ({ onSidebarHide }) => {
  const [repos, setRepos] = useState([]);
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?visibility=all`, // Fix Issue
        {}
      );
      setRepos(data);
      setLoad(false);
      console.log(repos);
    }
    getRepos();
  }, []);

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
      <div className="flex w-full">
        <div className="projects-list w-full lg:w-2/3 flex flex-wrap gap-2">
          {repos &&
            repos?.map(({ name, id, created_at, language,fork,visibility },i) => (
              <ProjectItem
                name={name}
                key={id}
                fork={fork}
                visibility={visibility}
                i={i}
                createdAt={created_at}
                language={language}
              />
            ))}
        </div>
        <div className="filters w-1/3 dark:bg-[#171717] rounded-lg px-4 py-4 mb-2">
          Filters
        </div>
      </div>
    </div>
  );
};

export default Projects;
