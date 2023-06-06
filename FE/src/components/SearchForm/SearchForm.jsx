import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onTeacherSearch, onCourseSearch }) => {
  const [teacherSearchTerm, setTeacherSearchTerm] = useState('');
  const [courseSearchTerm, setCourseSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleTeacherSearch = () => {
    onTeacherSearch({
      teacherSearchTerm,
      levelFilter,
      experienceFilter
    });
  };

  const handleCourseSearch = () => {
    onCourseSearch({
      courseSearchTerm,
      minPrice,
      maxPrice
    });
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="search-form-container">
      <h2>教師</h2>
      <input
        type="text"
        placeholder="Nhập tên giáo viên..."
        value={teacherSearchTerm}
        onChange={(e) => setTeacherSearchTerm(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Trình độ hiện tại..."
        value={levelFilter}
        onChange={(e) => setLevelFilter(e.target.value)}
        className="search-input"
      />
      <input
        type="number"
        placeholder="Số năm kinh nghiệm"
        value={experienceFilter}
        onChange={(e) => setExperienceFilter(e.target.value)}
        className="search-input"
      />
      <button onClick={handleTeacherSearch}>Tìm kiếm giáo viên</button>

      <h2>コース</h2>
      <input
        type="text"
        placeholder="Nhập tên khoá học..."
        value={courseSearchTerm}
        onChange={(e) => setCourseSearchTerm(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        value={minPrice}
        onChange={handleMinPriceChange}
        placeholder="Giá thấp nhất"
        className="search-input"
      />
      <input
        type="text"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        placeholder="Giá cao nhất"
        className="search-input"
      />
      <button onClick={handleCourseSearch}>Tìm kiếm khoá học</button>
    </div>
  );
};

export default SearchForm;