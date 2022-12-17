// Octokit.js

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});
interface RepoConfigInterface {
  per_page: number;
  visibility: "all" | "private" | "public";
  sort: "created" | "updated" | "pushed" | "full_name";
  direction: "asc" | "desc";
  page: number;
  since: string;
}

const UserRepos = ({per_page,visibility,sort,since,direction,page}: RepoConfigInterface) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?per_page=${per_page}&visibility=${visibility}&sort=${sort}&since=${since}&direction=${direction}&page=${page}`,

        {}
      );
      setRepos(data);
      console.log(repos);
    }
    getRepos();
  }, []);
  return repos;
};

export default UserRepos;
