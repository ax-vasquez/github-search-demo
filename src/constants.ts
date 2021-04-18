import { GithubClient } from "./github/client"

/**
 * This qualifier must be used with all searches employed by this app; this qualifier
 * will make it so that the corresponding search will limit the query to users (instead 
 * of including things like repos, issues, etc.)
 */
export const USER_QUALIFIER = `type:user`

export const githubClient = new GithubClient()
