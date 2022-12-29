import { octokit } from "./OctokitConstructor";
import { RepoConfigInterface } from "./repos-types";

export async function __getListOfRepos(repoConfig: RepoConfigInterface) {
  return await octokit
    .request(
      `GET /user/repos?visibility=all&per_page=${
        repoConfig.per_page || 5
      }&page=${repoConfig.page || 1}`, // Fix Issue
      {}
    )
    .then(({ data }) => data);
}
