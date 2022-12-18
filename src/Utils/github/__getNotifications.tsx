import { octokit } from "./OctokitConstructor";

export async function __getNotifications() {
  await octokit
    .request(
      //   "GET /notifications{?all,participating,since,before,page,per_page}",
      `GET /notifications?since=${new Date(
        Date.now() - 864e5 * 2
      ).toISOString()}&per_page=20`,
      {}
    )
    .then(({ data }) => console.log(data));
  console.log("Notifications is here");
}
