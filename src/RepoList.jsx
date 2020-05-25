import React from 'react';
import './RepoList.css';
import Pagination from './Pagination';

export const numberOfReposPerPage = 5;

// This is the magic behind the pagination. It uses the
// currentPage to select a subset of repos from repoList.
function getCurrentPageRepos(repoList, currentPage) {
  let repoUpperLimit = currentPage * numberOfReposPerPage;
  let repoLowerLimit = repoUpperLimit - numberOfReposPerPage;

  return repoList.slice(repoLowerLimit, repoUpperLimit);
}

export default function RepoList({
  repoList,
  setSelectedRepo,
  currentPage,
  setCurrentPage,
}) {
  let displayedRepos = getCurrentPageRepos(repoList, currentPage);

  return (
    repoList.length > 0 && (
      <>
        <table>
          <tbody>
            <tr>
              <th>Repo Name</th>
              <th>Number of Stars</th>
            </tr>
            {displayedRepos.map((repo) => {
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

        <Pagination repoList={repoList} setCurrentPage={setCurrentPage} />
      </>
    )
  );
}
