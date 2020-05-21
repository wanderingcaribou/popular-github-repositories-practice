This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Populate Github Repositories

Hi fren!

This is a React exercise where we'll use the Github API to fetch repositories that have over 25k stars and display them on a page.

### User stories

- As a user, I want to see the names of all repos with over 25k stars, sorted by most to least stars
- As a user, I want to know when the data is loading
- As a user, I want to know when there is an error
- As a user, I want to be able to specify the star count that determines which which repos to show
- As a user, I want to click on one of the rows and be taken to a new "page" that shows:
- - repo name
- - stars count
- - open_issues_count
- - forks count
- - a link to the repository
- As a user, I want a "Back" button to return to the list of repos
- As a user, I want results to be paginated with 5 repos on each page
- As a user, I want everything to be styled and look good

### Setup

After cloning this repository:

- Run `yarn install` to install dependencies
- Run `yarn start` to start up the app

### Github API

We'll be using the following Github endpoint in our code [as documented here](https://developer.github.com/v3/search/#search-repositories):

https://api.github.com/search/repositories?q=stars:%3E25000&sort=stars&order=desc
