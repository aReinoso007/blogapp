import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import '../index.css';
const BlogItem = ({blog, content}) => {
  return (
    <div className='blogItem-wrap' key={blog.uid}>
      <img className='blogItem-cover' src="https://static.vecteezy.com/system/resources/previews/009/198/869/non_2x/simple-book-icon-illustration-isolated-on-white-background-free-vector.jpg" alt='cover' />
      <Chip label={blog.title} />
      <h3>{blog.title}</h3>
      <p className='blogItem-desc'>{blog.contenido}</p>
      <footer>
        <div className='blogItem-author'>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt='avatar' />
          <div>
            <p>{blog.author}</p>
            <p>{blog.createdAt}</p>
            <p>{blog.status}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/home/blog/edit/${blog.uid}`} onClick={()=>{content(blog)}}>
          🖊
        </Link>
        <Link className='blogItem-link' to={`/home/blog/${blog.uid}`} onClick={()=>{content(blog)}}>
          ➝
        </Link>
      </footer>
    </div>
  );
};
export default BlogItem;