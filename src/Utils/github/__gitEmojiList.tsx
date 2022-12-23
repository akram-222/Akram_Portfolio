import { octokit } from "./OctokitConstructor";

export async function __getEmojiList() {
  return await octokit.request("GET /emojis", {}).then(({ data }) => data);
}
