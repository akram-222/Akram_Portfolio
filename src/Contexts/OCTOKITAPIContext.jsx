import { useContext, useState, useEffect, createContext } from "react";
import { Octokit } from "@octokit/core";

const OctokitContext = createContext();
export function GITHUBOCTOKITAPICONTEXT({ children }) {
  const [load, isLoad] = useState({ isLoading: true });
  const [gitHubData, setGitHubData] = useState(load);

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });
    const githubAPI = {
      async getUser() {
        const { data } = await octokit.request("GET /user");
        setGitHubData(data);
        console.log(data);
      },
    };
    githubAPI
      .getUser()
      .then((res) => {
        isLoad({ isLoading: false });
        res = { ...res, ...load };
        setGitHubData(res);
        console.log(gitHubData);
      })
      .catch((reason) => {
        new Error("error with githubAPI in App.tsx file" + reason);
      });
  }, []);

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
