import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss'
import logo from './logo.svg';

const Header = props => {
  const ListLink = props.ListLink;
  return (
    <header >
      <div className={headerStyles.header}>
        <Link to='/' className={headerStyles.imgContainer}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={headerStyles.linkGroup}>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/about/'>About</ListLink>
          <ListLink to='/represented-lines/'>Represented Lines</ListLink>
          <ListLink to='/contact/'>Contact</ListLink>
        </ul>
      </div>
    </header>
  )
}

export default Header;