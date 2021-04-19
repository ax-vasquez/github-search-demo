import { Octokit } from "@octokit/rest"

export type SORT = "followers" | "repositories" | "joined" | undefined
export type ORDER = "desc" | "asc" | undefined
export class GithubClient {
    octokit

    constructor() {
        this.octokit = new Octokit()
    }

    /**
     * @param q 
     * @see https://octokit.github.io/rest.js/v18#search-users
     */
    async getUsers({ q, sort, order, per_page, page }: 
    { 
        q: string
        sort?: SORT
        order?: ORDER
        per_page?: number | undefined 
        page?: number | undefined
    }) {
        return this.octokit.search.users({
            q,
            sort,
            order,
            per_page,
            page
        })
    }

    /**
     * @param param0 
     * @see https://octokit.github.io/rest.js/v18#users-list-followers-for-user
     * @returns 
     */
    async getFollowersForUser({ username }: { username: string }) {
        return this.octokit.rest.users.listFollowersForUser({
            username
        })
    }

    /**
     * @param param0 
     * @see https://octokit.github.io/rest.js/v18#users-list-following-for-user
     * @returns 
     */
    async getFollowingForUser({ username }: { username: string }) {
        return this.octokit.rest.users.listFollowingForUser({
            username,
            per_page: 100
        })
    }

    /**
     * @param param0 
     * @see https://octokit.github.io/rest.js/v18#activity-list-repos-starred-by-user
     * @returns 
     */
    async getStarredReposForUser({ username }: { username: string }) {
        return this.octokit.rest.activity.listReposStarredByUser({
            username,
            per_page: 100
        })
    }

    /**
     * @param param0 
     * @see https://octokit.github.io/rest.js/v18#users-get-by-username
     * @returns 
     */
     async getUser({ username }: { username: string }) {
        return this.octokit.rest.users.getByUsername({
            username,
            per_page: 100
        })
    }
}
