import express from "express"
import {
    getGithubUsers,
    getFollowersForUser,
    getFollowingForUser,
    getStarredReposForUser,
    getUser
} from "./route-handlers"
import cors from "cors"

var app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())


app.get(`/user`, getUser)
app.get(`/users`, getGithubUsers)
app.get(`/user/followers`, getFollowersForUser)
app.get(`/user/following`, getFollowingForUser)
app.get(`/user/repos/starred`, getStarredReposForUser)

export function initServer() {
    app.listen(process.env.PORT)
}
  