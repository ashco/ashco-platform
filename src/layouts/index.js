import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';
import './index.css';

import image from '../images/logo-dark.svg';

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
      <div
        style={{
          margin: '0 auto',
          maxWidth: '990px',
          // padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
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
