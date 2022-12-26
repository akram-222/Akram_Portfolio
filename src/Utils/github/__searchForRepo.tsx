import { octokit } from "./OctokitConstructor";

export async function __getRepo(repoName) {
  return await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'OWNER',
  repo: repoName
})
    .then(({ data }) => data);

}
