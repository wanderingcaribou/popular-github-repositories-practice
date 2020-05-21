import React, { useEffect, useState } from 'react';
import './App.css';

// I want to see all repos with over 25k stars, sorted by most to least stars
// I want to see the repo name, number of stars, and a link to the repo
// I want to know when the data is loading
// I want to know when there is an error
// I want to be able to specify the star count that determines which which repos to show
//
// Github API endpoint:
//
//   https://api.github.com/search/repositories?q=stars:%3E25000&sort=stars&order=desc
//
// Github documentation for this endpoint:
//
//   https://developer.github.com/v3/search/#search-repositories
//
// General strategy
//
//  - Make an API call on app load
//  - Parse the fetched data
//  - Store fetched data in state
//  - Display data on page
//  - Handle Loading and error states
//
//  Repository API Properties
//
//  - full_name
//  - stargazers_count
//  - html_url
//  - id
//
function getGithubRepos() {
  return fetch(
    'https://api.github.com/search/repositories?q=stars:%3E25000&sort=stars&order=desc'
  ).then((data) => data.json());
}

function App() {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    getGithubRepos()
      .then((results) =>
        results.items.map(({ id, full_name, stargazers_count, html_url }) => {
          return { id, full_name, stargazers_count, html_url };
        })
      )
      .then((repoList) => setRepoList(repoList));
  }, []);

  return (
    <div className="App">
      {repoList === null ? (
        <span>Loading</span>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Number of Stars</th>
              <th>Link</th>
            </tr>
            {repoList.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>{repo.fullName}</td>
                  <td>{repo.stargazers_count}</td>
                  <td>
                    <a href={repo.html_url}>{repo.html_url}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
