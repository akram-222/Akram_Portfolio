import { octokit } from "./OctokitConstructor";

export async function __getListOfRepos() {
  return await octokit
    .request("GET /repos/{owner}/{repo}/languages", {
      owner: "OWNER",
      repo: "REPO",
    })
    .then(({ data }) => data);

  console.log("List Of Repos fetched");
}
