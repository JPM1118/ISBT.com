import React from "react";
import { Link } from 'gatsby';
import layoutStyles from './layout.module.css';

import Header from '../header';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}> {props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={layoutStyles.container}>
    <Header ListLink={ListLink} />
    {children}
  </div>
)