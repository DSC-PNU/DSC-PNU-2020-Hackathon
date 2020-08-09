import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='menu-header'>
      <span>
        <Link to='/'>ASYNC-AWAIT</Link>
      </span>
      <Menu />
    </header>
  );
};

export default Header;
