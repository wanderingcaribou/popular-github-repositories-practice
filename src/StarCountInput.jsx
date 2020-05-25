import React, { useState } from 'react';

function getGithubRepos(starCount = 10000) {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:>${starCount}&sort=stars&order=desc`
  ).then((data) => data.json());
}

export default function StarCountInput({ setRepoList, setFetching }) {
  const [starCountThreshold, setStarCountThreshold] = useState('');

  return (
    <div style={{ textAlign: 'left', marginBottom: 20 }}>
      <input
        type="number"
        onChange={(event) => setStarCountThreshold(event.target.value)}
      />

      <button
        onClick={() => {
          setFetching(true);

          getGithubRepos(starCountThreshold)
            .then((results) =>
              results.items.map(
                ({
                  id,
                  full_name,
                  stargazers_count,
                  open_issues_count,
                  forks_count,
                  html_url,
                }) => {
                  return {
                    id,
                    full_name,
                    stargazers_count,
                    open_issues_count,
                    forks_count,
                    html_url,
                  };
                }
              )
            )
            .then((repoList) => setRepoList(repoList))
            .then(() => setFetching(false));
        }}
      >
        Submit
      </button>
    </div>
  );
}
