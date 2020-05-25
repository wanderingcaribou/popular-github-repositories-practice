import React, { useEffect, useState } from 'react';
import './App.css';
import StarsCountInput from './StarCountInput';
import RepoList from './RepoList';
import Repo from './Repo';

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
function App() {
  const [repoList, setRepoList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);

  return (
    <div className="App">
      <StarsCountInput setRepoList={setRepoList} setFetching={setFetching} />
      {fetching && <div>Loading</div>}

      {selectedRepo ? (
        <Repo selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} />
      ) : (
        <RepoList repoList={repoList} setSelectedRepo={setSelectedRepo} />
      )}
    </div>
  );
}

export default App;
