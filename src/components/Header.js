import React from 'react';
import '../index.css';
import useAuth from "../hooks/useAuth";

const Header = () => {
  const {  auth } =  useAuth();
  return (
    <header className='home-header'>
      <h1>Blog Project</h1>
      <h2>Bienvenida {auth.names}</h2>
    </header>
  )
}
export default Header;