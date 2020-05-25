import React from 'react';
import './RepoList.css';

export default function RepoList({ repoList, setSelectedRepo }) {
  return (
    repoList.length > 0 && (
      <table>
        <tbody>
          <tr>
            <th>Repo Name</th>
            <th>Number of Stars</th>
          </tr>
          {repoList.map((repo) => {
            return (
              <tr
                key={repo.id}
                className="repo-list__row"
                onClick={() => setSelectedRepo(repo)}
              >
                <td>{repo.full_name}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
