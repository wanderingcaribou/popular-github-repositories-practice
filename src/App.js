import React, { useEffect, useState } from 'react';
import './App.css';
import StarsCountInput from './StarCountInput';
import RepoList from './RepoList';
import Repo from './Repo';

function App() {
  const [repoList, setRepoList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <StarsCountInput setRepoList={setRepoList} setFetching={setFetching} />
      {fetching && <div style={{ marginBottom: 10 }}>Loading</div>}

      {selectedRepo ? (
        <Repo selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} />
      ) : (
        <RepoList
          repoList={repoList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSelectedRepo={setSelectedRepo}
        />
      )}
    </div>
  );
}

export default App;
