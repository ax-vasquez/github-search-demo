# github-search-demo

A simple server project implementing the back end of a webapp that will be used to serve up paginated results to a webapp. The features listed in this README may not necessarily be handled directly by this backend server, but all operations are facilitated by it.

This project loosely emulates the functionality here: https://github.com/search

The primary API demonstrated in this project is https://developer.github.com/v3/search/

## Features
1. Search GitHub users using paginated results
2. Navigation between pages
3. Information about the search result
4. Information for each user returned in the search result (description, star/follower count, profile pictures, etc)
5. Records in the list can be clicked so the user is navigated to the correct user's GitHub page

## Testing instructions
There is a live demo of this server deployed on Heroku. There is no front end deployed there, so it's only for the API. The React app will be deployed elsewhere.

Base URL for the deployed API: https://axv-github-user-search-demo.herokuapp.com

**API Endpoints**
| Endpoint | Query Parameters | Description |
| -------- | ---------- | ----------- |
| `/users` | `q`, `sort?`, `order?`, `per_page?`, `page?` | Get a list of users by the given query parameter (`q`), with some optional parameters to assist in pagination |
| `/user` | `username` | Get basic information about a given user, such as their bio, company, etc. |
| `/user/followers` | `username` | Get the list of users that are following the given user |
| `/user/following` | `username` | Get the list of users that the given user is following |
| `/user/repos/starred` | `username` | Get the list of repos that the user has starred |

### Local, manual testing
> Before you start testing, if you haven't already done so, **create a `.env` file at the root of the repo** and modify it so that it has a value for `PORT`; set it to whatever you like
1. Start the application with `yarn start:local`
2. Test the various endpoints listed above at the base URL `http://localhost:<PORT>`
