import { octokit } from "./OctokitConstructor";

export async function __getFollowersList() {
  return await octokit
    .request("GET /user/followers{?per_page,page}", {})
    .then(({ data }) => data);
}
