import {React} from 'react';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import '../index.css';
import { Link } from 'react-router-dom';

const Blog = ({content}) => {
  console.log('content ', content)
 
  return (
    <>
    <Link className='blog-goBack' to='/home'>
      <span> &#8592;</span> <span>Go Back</span>
    </Link>
    {content ? (
      <div className='blog-wrap'>
        <header>
        <h1>{content.title}</h1>
          <p className='blog-date'>Publicado {content.createdAt}</p>
          <div className='blog-subCategory'>
            
              <div>
                <Chip label={content.author} />
              </div>
            
          </div>
        </header>
        <div className='blog-content' dangerouslySetInnerHTML={{__html: content.contenido}}></div>
      </div>
    ) : (
      <EmptyList />
    )}
  </>
  );
};
export default Blog;