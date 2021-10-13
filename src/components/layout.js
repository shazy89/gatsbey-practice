import React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';

const LayOut = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default LayOut;
