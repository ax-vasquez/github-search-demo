import express from "express"
import { githubClient } from "../../constants"

export function getStarredReposForUser(
  req: express.Request,
  res: express.Response
) {
    const {
        username
    } = req.query

    try {
        githubClient.getStarredReposForUser({
            username: username as string
        })
        .then(starredReposRes => {
            res.send(starredReposRes.data)
        })
    } catch (e) {
        res.send({
            error: e.message
        })
    }
    
}
