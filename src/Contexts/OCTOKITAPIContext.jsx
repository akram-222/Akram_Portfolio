import React, { useContext, useState, useEffect, createContext } from "react";
import { Octokit } from "@octokit/core";

const OctokitContext = createContext();
export function GITHUBOCTOKITAPICONTEXT({ children }) {
  const [load, isLoad] = useState({ isLoading: true });
  const [gitHubData, setGitHubData] = useState(load);
  const octokit = new Octokit({
    baseUrl: "https://api.github.com",
  });
  const githubAPI = {
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
  useEffect(() => {
    githubAPI
      .getReposByName("ak-ram", 5, 1)
      .then((res) => {
          isLoad({isLoading: false})
          res = {...res,...load}
        setGitHubData(res);
      })
      .catch((reason) => {
        new Error("error with githubAPI in App.tsx file" + reason);
      });
  }, [gitHubData]);

  return (
      
    <OctokitContext.Provider value={{ gitHubData}}>
      {children}
    </OctokitContext.Provider>
  );
}

export function useOctokitResponse() {
  const context = useContext(OctokitContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
