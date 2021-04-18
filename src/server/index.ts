import express from "express"
import {
    getGithubUsers,
    getFollowersForUser,
    getFollowingForUser,
    getStarredReposForUser
} from "./route-handlers"

var app = express()

app.use(express.urlencoded())
app.use(express.json())

app.get(`/users`, getGithubUsers)
app.get(`/user/followers`, getFollowersForUser)
app.get(`/user/following`, getFollowingForUser)
app.get(`/user/repos/starred`, getStarredReposForUser)

export function initServer() {
    app.listen(3000)
}
  