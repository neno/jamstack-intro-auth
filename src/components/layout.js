import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-intro-auth-neno.netflify.com">
    <header>
      <Link to="/">JAMstack APP</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout;
