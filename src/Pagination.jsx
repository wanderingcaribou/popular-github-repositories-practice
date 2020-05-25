import React from 'react';
import { numberOfReposPerPage } from './RepoList';

function renderPageNumber(pageNumber, setCurrentPage) {
  return (
    <span
      key={pageNumber}
      onClick={() => setCurrentPage(pageNumber)}
      style={{ marginRight: 15 }}
    >
      {pageNumber}
    </span>
  );
}

export default function Pagination({ repoList, setCurrentPage }) {
  const totalNumberOfPages = Math.ceil(repoList.length / numberOfReposPerPage);
  const pagesList = [];

  for (var pageNumber = 1; pageNumber < totalNumberOfPages; pageNumber++) {
    pagesList.push(renderPageNumber(pageNumber, setCurrentPage));
  }

  return <div style={{ marginTop: 20, cursor: 'pointer' }}>{pagesList}</div>;
}
