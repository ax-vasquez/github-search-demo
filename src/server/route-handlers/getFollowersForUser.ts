import express from "express"
import { githubClient } from "../../constants"

export function getFollowersForUser(
  req: express.Request,
  res: express.Response
) {
    const {
        username
    } = req.query

    try {
        githubClient.getFollowersForUser({
            username: username as string
        })
        .then(followersRes => {
            res.send(followersRes)
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
