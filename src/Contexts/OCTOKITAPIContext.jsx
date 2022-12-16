import { useContext, useState, useEffect, createContext } from "react";
import { Octokit } from "@octokit/core";

const OctokitContext = createContext();
export function GITHUBOCTOKITAPICONTEXT({ per_page, children }) {
  const [load, isLoad] = useState({ isLoading: true });
  const [gitHubData, setGitHubData] = useState(load);

  useEffect(() => {
    const octokit = new Octokit({
      baseUrl: "https://api.github.com",
    });
    const githubAPI = {
      async getReposByName(inputName, per_page, currentPage) {
        const { data } = await octokit.request("GET /search/repositories", {
          q: inputName + "+in:name",
          sort: "stars",
          per_page: per_page,
          page: currentPage,
        });
        return data;
      },
    };
    githubAPI
      .getReposByName("ak-ram", per_page, 1)
      .then((res) => {
        isLoad({ isLoading: false });
        res = { ...res, ...load };
        setGitHubData(res);
      })
      .catch((reason) => {
        new Error("error with githubAPI in App.tsx file" + reason);
      });
  }, [gitHubData, per_page, load]);

  return (
    <OctokitContext.Provider value={{ gitHubData }}>
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
