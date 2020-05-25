import React from 'react';

export default function Repo({ selectedRepo, setSelectedRepo }) {
  return (
    <>
      <span onClick={() => setSelectedRepo(null)} style={{ cursor: 'pointer' }}>
        &lt; Back
      </span>

      <ul>
        <li>Name: {selectedRepo.full_name}</li>
        <li>Stars: {selectedRepo.stargazers_count}</li>
        <li>Open issues: {selectedRepo.open_issues_count}</li>
        <li>Forks count: {selectedRepo.forks_count}</li>
        <li>
          <a href={selectedRepo.html_url} target="_blank">
            {selectedRepo.html_url}
          </a>
        </li>
      </ul>
    </>
  );
}
