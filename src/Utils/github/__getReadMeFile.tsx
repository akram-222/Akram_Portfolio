import { octokit } from "./OctokitConstructor";

export async function __getReadMeFile(repoName) {
  return await octokit
    .request("GET /repos/{owner}/{repo}/readme{?ref}", {
      owner: "ak-ram",
      repo: repoName,
    })
    .then(({ data }) => data);
}
