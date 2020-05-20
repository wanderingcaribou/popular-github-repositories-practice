This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Populate Github Repositories

Hi fren!

This is a React exercise where we'll use the Github API to fetch repositories that have over 25k stars and display them on a page.

### User stories

- As a user, I want to see all repos with over 25k stars, sorted by most to least stars
- As a user, I want to see the repo name, number of stars, and a link to the repo
- As a user, I want to know when the data is loading
- As a user, I want to know when there is an error
- As a user, I want to be able to specify the star count that determines which which repos to show

### Setup

After cloning this repositor, run `yarn start` to start up the app.

### Github API

We'll be using the following Github endpoint in our code [as documented here](https://developer.github.com/v3/search/#search-repositories):

https://api.github.com/search/repositories?q=stars:%3E25000&sort=stars&order=desc
