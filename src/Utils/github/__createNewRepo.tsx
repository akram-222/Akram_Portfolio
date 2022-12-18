import { octokit } from "./OctokitConstructor";

export async function __createNewRepo(
  repoName: string,
  repoDescription?: string,
  isPrivate?: boolean,
  isTemplate?: boolean
) {
  await octokit.request("POST /user/repos", {
    name: repoName,
    description: repoDescription || "This Repo is created from Akram Portfolio",
    homepage: "https://github.com",
    private: isPrivate || false,
    is_template: isTemplate || false,
  });
  console.log("new repo created successfully");
}
