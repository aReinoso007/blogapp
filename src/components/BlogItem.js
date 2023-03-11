import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import '../index.css';
const BlogItem = ({blog, content}) => {
  return (
    <div className='blogItem-wrap' key={blog.title}>
      <h3>{blog.title}</h3>
      <p className='blogItem-desc'>{blog.content}</p>
    </div>
  );
};
export default BlogItem;