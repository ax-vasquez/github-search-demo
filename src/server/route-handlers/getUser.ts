import express from "express"
import { githubClient } from "../../constants"

export function getUser(
  req: express.Request,
  res: express.Response
) {
    const {
        username
    } = req.query

    try {
        githubClient.getUser({
            username: username as string
        })
        .then(getUserRes => {
            res.send(getUserRes.data)
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
