import { octokit } from "./OctokitConstructor";

export async function __deleteRepo(repoName:string) {
  await octokit.request(
    `DELETE /repos/{owner}/{repo}`, // Fix Issue
    {
      owner: "ak-ram",
      repo: repoName,
    }
  );
  console.log('repo is deleted')
}
