import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';
import './index.css';

import styled from 'styled-components';
import image from '../images/logo-dark.svg';

const Main = styled.div`
  position: absolute;
  overflow-y: scroll;
  background-color: #222;
  top: ${({ isHome }) => (isHome ? '100vh' : '15vh')};
  width: 100vw;
  padding-top: 0;
`;

const Layout = ({ children, data, location }) => {
  let pageTitleArr = location.pathname.split('/');
  let pageTitle = '';
  if (pageTitleArr.length >= 0) {
    pageTitle = pageTitleArr[pageTitleArr.length - 1];
    pageTitle = pageTitle
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header data={data} location={location} title={pageTitle} />
      <Main isHome={location.pathname === '/'}>
        {children()}
        <Footer />
      </Main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
