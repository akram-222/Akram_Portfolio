import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    baseUrl: 'https://api.github.com'
});

export const githubAPI = {
    async getReposByName(inputName: string, per_page: number, currentPage: number) {
        const { data } = await octokit.request('GET /search/repositories', {
            q: inputName + '+in:name',
            sort: 'stars',
            per_page: per_page,
            page: currentPage,
        })
        return data
    }
}