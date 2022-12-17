// Octokit.js

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

const UserRepos = (
  per_page: number = 5,
  visibility: "all" | "private" | "public" = "public",
  sort: "created" | "updated" | "pushed" | "full_name" = "updated",
  direction: "asc" | "desc" = "asc",
  page: number = 1,
  since: string = "2022-12-16T00:14:27Z"
) => {
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
