import React from 'react';
import { Link } from 'gatsby';

const Header = props => {
  const ListLink = props.ListLink;
  return (
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to='/' style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/about/'>About</ListLink>
        <ListLink to='/contact/'>Contact</ListLink>
      </ul>
    </header>
  )
}

export default Header;