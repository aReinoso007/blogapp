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
          <p className='blog-date'>Published {content.createdAt}</p>
          <h1>{content.title}</h1>
          <div className='blog-subCategory'>
            
              <div>
                <Chip label={content.title} />
              </div>
            
          </div>
        </header>
        <div className='blog-content' dangerouslySetInnerHTML={{__html: content.content}}></div>
      </div>
    ) : (
      <EmptyList />
    )}
  </>
  );
};
export default Blog;