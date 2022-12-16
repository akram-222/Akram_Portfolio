// Octokit.js

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

const UserRepos = (per_page:number) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?per_page=${per_page}`,

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
