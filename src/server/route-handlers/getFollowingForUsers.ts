import express from "express"
import { githubClient } from "../../constants"

export function getFollowingForUser(
  req: express.Request,
  res: express.Response
) {
    const {
        username
    } = req.query

    try {
        githubClient.getFollowingForUser({
            username: username as string
        })
        .then(followingRes => {
            res.send(followingRes)
        })
        .catch(e => {
            res.send({
                error: e.message
            })
        })
    } catch (e) {
        res.send({
            error: e.message
        })
    }
    
}
