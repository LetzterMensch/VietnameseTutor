/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [teacherSearchTerm, setTeacherSearchTerm] = useState('');
  const [courseSearchTerm, setCourseSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


  const handleTeacherSearch = () => {
    // Gọi API để tìm kiếm giáo viên với teacherSearchTerm
    console.log('Searching for teacher:', teacherSearchTerm);
    console.log('Name:', teacherSearchTerm);
    console.log('Level:', levelFilter);
    console.log('Experience:', experienceFilter);
    // Xử lý kết quả tìm kiếm và cập nhật state hoặc hiển thị danh sách giáo viên
  };

  const handleCourseSearch = () => {
    // Gọi API để tìm kiếm khoá học với courseSearchTerm
    console.log('Searching for course:', courseSearchTerm);
    // Xử lý kết quả tìm kiếm và cập nhật state hoặc hiển thị danh sách khoá học
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearch = () => {
    // Gửi yêu cầu tìm kiếm với giá trị minPrice và maxPrice
    // Xử lý logic tìm kiếm và hiển thị danh sách khoá học phù hợp
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
      <input type="number" name="myInput" placeholder="Số năm kinh nghiệm " step="1"  min="1" max="100" required
        // eslint-disable-next-line react/jsx-no-duplicate-props
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
      <input type="text" value={minPrice} onChange={handleMinPriceChange} placeholder="Min Price" />
      <input type="text" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max Price" />
      <button onClick={handleSearch}>Search</button>

      {/* Hiển thị danh sách giáo viên và khoá học */}
    </div>
  );
};

export default SearchForm;