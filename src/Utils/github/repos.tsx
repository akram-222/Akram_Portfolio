// Octokit.js

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

const UserRepos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        "GET /user/repos{?visibility,affiliation,type,sort,direction,per_page,page,since,before}",
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
