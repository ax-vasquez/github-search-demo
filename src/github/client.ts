import { Octokit } from "@octokit/rest"

export class GithubClient {
    octokit

    constructor() {
        this.octokit = new Octokit()
    }

    /**
     * 
     * 
     * @param q 
     * @see https://octokit.github.io/rest.js/v18#search-users
     */
    async getUsers({ q }: { q: string }) {
        return this.octokit.search.users({
            q
        })
    }
}
