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
