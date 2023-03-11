import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import '../index.css';
const BlogItem = ({blog, content}) => {
  return (
    <div className='blogItem-wrap' key={blog.uid}>
      <img className='blogItem-cover' src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png" alt='cover' />
      <Chip label={blog.title} />
      <h3>{blog.title}</h3>
      <p className='blogItem-desc'>{blog.content}</p>
      <footer>
        <div className='blogItem-author'>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt='avatar' />
          <div>
            <p>{blog.createdAt}</p>
            <p>{blog.status}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${blog.uid}`} onClick={()=>{content(blog)}}>
          ➝
        </Link>
      </footer>
    </div>
  );
};
export default BlogItem;