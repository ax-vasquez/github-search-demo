import express from "express"
import { getGithubUsers } from "./route-handlers"

var app = express()

app.use(express.urlencoded())
app.use(express.json())

app.get(`/users`, getGithubUsers)

export function initServer() {
    app.listen(3000)
}
  