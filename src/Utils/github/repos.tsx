// Octokit.js

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import { RepoConfigInterface } from "./repos-types";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

const UserRepos = ({
  per_page,
  visibility,
  sort,
  // since,
  direction,
  page,
}: RepoConfigInterface) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?per_page=${per_page}&visibility=${visibility}&sort=${sort}&direction=${direction}&page=${page}`,

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
