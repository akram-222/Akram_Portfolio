import { octokit } from "./OctokitConstructor";

export async function __getUserInfo() {
  return await octokit
    .request("GET /users/{username}", {
      username: "ak-ram",
    })
    .then(({ data }) => data);
}
