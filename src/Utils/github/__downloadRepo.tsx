import { octokit } from "./OctokitConstructor";

export async function __downloadRepo(repoName) {
  return await octokit
    .request("GET /repos/{owner}/{repo}/zipball/{ref}", {
      owner: "ak-ram",
      repo: repoName,
      ref: "main",
    })
    ;
}
