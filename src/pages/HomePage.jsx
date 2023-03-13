import { React, useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { blogList } from '../config/Api';

const HomePage = ({ data }) => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  const handleSearchResults = () => {
    const filtered = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchKey.toLowerCase());
    });
    setBlogs(filtered);
  };
  const handleClearSearch = () => {
    blogList().then((res) => {
      setBlogs(res);
    })
    setSearchKey("");
  };

  useEffect(() => {
    blogList().then((res) => {
        setBlogs(res);
    })
} , []);

  const BlogContent = (id) => {
    data(id);
  }

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content={BlogContent} />}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default HomePage;