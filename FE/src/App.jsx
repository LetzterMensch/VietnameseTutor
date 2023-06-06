import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

const SearchFormDemo = () => {
  return (
    <div className="SearchFormDemo">
      <h1>講師とコース</h1>
      <SearchForm />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      {/* Đây là nội dung gốc của App */}
      <h1>VietnameseTutor</h1>
      {/* ... */}
      <SearchFormDemo /> {/* Thêm component TeacherSearchDemo */}
      {/* ... */}
    </div>
  );
};

export default App;