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

### Local, manual testing
1. Start the application with `yarn start:local`
2. In a browser tab, paste in the this URL: `http://localhost:3000/users?query=<SEARCH_QUERY>`
    * `SEARCH_QUERY` is whatever you want to search the users by
    * For example, `http://localhost:3000/users?query=a` get all users with `a` in their name (though there seems to be some weirdness in some search result; for some reason, the user `snyff` shows up when querying for `a` - this appears to be an issue with either Octokit or the GitHub API)
        * *Potential idea - it could be that this user renamed themselves recently and it hasn't been reflected in the API? Either way, I've confirmed this is not something I can fix in the scope of this project*
