import React from 'react';
import useAuth from "../hooks/useAuth";

const Header = () => {
  const {  auth } =  useAuth();
  return (
    <header className='home-header'>
      <h1>Blog Project</h1>
      <h2>Bienvenido {auth.names}</h2>
    </header>
  )
}
export default Header;