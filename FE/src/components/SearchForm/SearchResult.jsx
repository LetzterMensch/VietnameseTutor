import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      <h2>Kết quả tìm kiếm</h2>
      {results.length === 0 ? (
        <p>Không có kết quả phù hợp.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;