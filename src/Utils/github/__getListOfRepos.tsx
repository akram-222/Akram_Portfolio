import { octokit } from "./OctokitConstructor";

export async function __getListOfRepos(repoConfig) {
  return await octokit
    .request(
      `GET /user/repos?visibility=all&per_page=${repoConfig.per_page || 5}`, // Fix Issue
      {}
    )
    .then(({ data }) => data);

  console.log("List Of Repos fetched");
}
