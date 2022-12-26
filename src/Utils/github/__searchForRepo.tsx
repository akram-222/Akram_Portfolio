import { octokit } from "./OctokitConstructor";

export async function __getRepo(repoName: string) {
  return await octokit
    .request("GET /repos/{owner}/{repo}", {
      owner: "ak-ram",
      repo: repoName,
    })
    .then(({ data }) => data)
    .catch(() => console.log("repo doesn't exist"));
}
