import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import { BsLink45Deg, BsThreeDotsVertical } from "react-icons/bs"
import Icon from "./Icon";
import Spinner from "./Spinner";
// import Image from "./Image";
export default function Repos() {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  });

  const [repos, setRepos] = useState([]);
  const [repoConfig, setRepoConfig] = useState({ per_page: 5 })
  const [isLoad, setLoad] = useState(true)
  const [isRepoDeleted, setIsDeleted] = useState(false)
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?visibility=all&per_page=${repoConfig.per_page || 5}`, // Fix Issue
        {}
      );

      setRepos(data);
      setLoad(false)

    }
    getRepos();
  }, [repoConfig, isRepoDeleted]);


  async function deleteRepo(event) {
    // await octokit.request(
    //   `DELETE /repos/{owner}/{repo}`, // Fix Issue
    //   {
    //     owner: "ak-ram",
    //     repo: `${event.target.dataset.reponame}`
    //   }
    // );
    console.log('event is fired', event.target.dataset.reponame)
  }

  let UIReposList = repos?.map(({ size, name, has_issues, svn_url }, index: number) => (
    <div className="flex items-center mt-3 relative" key={index}>
      <div className="">{index + 1}</div>

      {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
      <div className="ml-2 whitespace-nowrap text-ellipsis mr-3 w-28" >
        {name}
      </div>
      <div className="flex-grow" />
      <span className={`mr-2 text-sm whitespace-nowrap ${size > 2000 ? "text-red-500" : size < 500 ? "text-green-500" : "text-premium-yellow"}`}>{size} kb</span>
      <div className="">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={svn_url}
        >
          <BsLink45Deg />
        </a>
      </div>
      <Icon
        path={
          has_issues
            ? "res-react-dash-country-up"
            : "res-react-dash-country-down"
        }
        className="w-4 h-4 mx-3"
      />
      <BsThreeDotsVertical className="w-2 h-2" />
      {/* <button data-reponame={name} onClick={(event) => {
        deleteRepo(event)
        setIsDeleted(true)
      }
      }>Del</button> */}
    </div>
  ))


  return (
    <div className="flex p-4 flex-col h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">GitHub Repos</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      <div className="">
        favourites
      </div>

      {UIReposList}

      {/* <div className="flex-grow" /> */}
      <div className="flex justify-center mt-4 relative">
        <button
          type="button"
          onClick={() => {
            setLoad(true)
            setRepoConfig({ ...repoConfig, per_page: repoConfig.per_page + 5 })
            console.log(repos);
          }}
          className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
        >
          Total Repos:<span className="ml-1 w-10 text-sm text-premium-yellow"> {isLoad ? <Spinner /> : repos?.length}</span>
        </button>
      </div>
    </div>
  );
}