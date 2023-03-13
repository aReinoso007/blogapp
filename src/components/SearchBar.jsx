import React from 'react';
import '../index.css';
import '../styles/SearchBar.css'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch, handleAdd }) => {

  const navigate = useNavigate();

  return (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          placeholder='Buscar por titulo'
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Buscar</button>
        <br />
        <Link to="/home/blog/add">
        <button>Agregar</button>
        </Link>
      </form>
    </div>
  )
}
export default SearchBar;