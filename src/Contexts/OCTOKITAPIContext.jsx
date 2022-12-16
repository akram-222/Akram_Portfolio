import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
const octokit = new Octokit({
  baseUrl: "https://api.github.com",
});

export const githubAPI = {
  async getReposByName(
    inputName: string,
    per_page: number,
    currentPage: number
  ) {
    const { data } = await octokit.request("GET /search/repositories", {
      q: inputName + "+in:name",
      sort: "stars",
      per_page: per_page,
      page: currentPage,
    });
    return data;
  },
};

// ///////////////

export const OctokitRes = (per_page: number, page: number) => {
  const [res, setRes] = useState(null);
//   const [Load, isLoad] = useState<boolean>(true);
  useEffect(() => {
    githubAPI
      .getReposByName("ak-ram", per_page, page)
      .then((res) => {
        setRes(res);
        // isLoad(false);
      })
      .catch((reason) => {
        new Error("error with githubAPI in App.tsx file" + reason);
      });
    console.log(res);
  }, [res, page, per_page]);
  return res;
};
