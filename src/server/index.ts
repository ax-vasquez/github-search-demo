import express from "express"
import { getGithubUsers } from "./route-handlers"
import { getFollowersForUser } from "./route-handlers/getFollowersForUser"
import { getFollowingForUser } from "./route-handlers/getFollowingForUsers"

var app = express()

app.use(express.urlencoded())
app.use(express.json())

app.get(`/users`, getGithubUsers)
app.get(`/user/followers`, getFollowersForUser)
app.get(`/user/following`, getFollowingForUser)

export function initServer() {
    app.listen(3000)
}
  