import { octokit } from "./OctokitConstructor";

export async function __getListOfRepos() {
 return await octokit
    .request(
      `GET /user/repos?visibility=all`, // Fix Issue
      {}
    )
    .then(({data}) => data);

  console.log("List Of Repos fetched");
}
