// Octokit.js

import { Octokit } from "@octokit/core";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: "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",
});

export const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});

