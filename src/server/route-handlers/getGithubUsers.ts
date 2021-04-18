import express from "express"
import { githubClient, USER_QUALIFIER } from "../../constants"
import { UserSearchResultResponse } from "../types"

export function getGithubUsers(
  req: express.Request,
  res: express.Response
) {
    const { query } = req.query

    try {
        let userQuery: string
        if ((query as string).includes(USER_QUALIFIER)) {
            userQuery = query as string
        } else {
            userQuery = query + USER_QUALIFIER
        }

        return githubClient.getUsers({ q: userQuery })
            .then(response => {
                const users = response.data as UserSearchResultResponse
                res.send(users)
            })
    } catch (e) {
        if (e.message.includes(`Cannot read property 'includes' of undefined`)) {
            // Emulate an empty response when the user submits an empty query (otherwise they will hit error when submitting an empty response)
            res.send({
                items: []
            })
        } else {
            // Something unexpected happen - we should show the user what went wrong
            // ideally, this would only ever be a result of internet/service outages (barring any unforeseen bugs)
            res.send({
                error: e.message
            })
        }
        
    }
}
