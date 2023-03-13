import React from 'react';
import BlogItem from './BlogItem';

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