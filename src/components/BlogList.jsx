import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';

const BlogList = ({ blogs, content }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} content={content} key={blog.uid}/>
      ))}
    </div>
  );
};
export default BlogList;