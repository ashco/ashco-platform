import React, { Component } from 'react';
import styled from 'styled-components';

import AnchorPoint from '../components/AnchorPoint';
import About from '../components/Main/AboutSection';
import Portfolio from '../components/Main/PortfolioSection';
import Blog from '../components/Main/BlogSection';
import Contact from '../components/Main/ContactSection';
import { StaticQuery, graphql } from 'gatsby';

import { Button } from './contact';
import { DefaultContainer } from '../components/helpers';

class IndexPage extends Component {
  handleColor(colorObj) {
    console.log(colorObj);
    theme.colorDarker = colorObj.colorDarker;
    theme.colorPrimary = colorObj.colorPrimary;
    theme.colorLighter = colorObj.colorLighter;
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query PortfolioMainList {
            allContentfulPortfolioProject(
              limit: 3
              sort: { fields: [createdAt], order: DESC }
            ) {
              edges {
                node {
                  id
                  title
                  slug
                  createdAt
                  image {
                    id
                    resize(width: 300, height: 200, resizingBehavior: SCALE) {
                      src
                      width
                      height
                    }
                  }
                  githubLink
                  liveSiteLink
                }
              }
            }
            allContentfulBlogPost(
              limit: 3
              sort: { fields: [createdAt], order: DESC }
            ) {
              edges {
                node {
                  id
                  title
                  slug
                  createdAt(formatString: "MM-DD-YYYY")
                  body {
                    childMarkdownRemark {
                      excerpt
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <MainContainer>
            <AnchorPoint id="home" />
            <About />
            <Portfolio projects={data.allContentfulPortfolioProject.edges} />
            <Blog posts={data.allContentfulBlogPost.edges} />
            <Contact />
            {colorArr.map(color => {
              return (
                <ButtonColor
                  onClick={this.handleColor.bind(null, color)}
                  color={color}
                />
              );
            })}
          </MainContainer>
        )}
      />
    );
  }
}

const MainContainer = styled(DefaultContainer)`
  /* height: 77vh; */
`;

const ButtonColor = styled(Button)`
  border-image: linear-gradient(
    135deg,
    ${props => props.color.colorDarker} 0%,
    ${props => props.color.colorPrimary} 50%,
    ${props => props.color.colorLighter} 100%
  );
  border-image-slice: 1;
  color: ${props => props.theme.colorText};
`;

export let theme = {
  colorLighter: '#E3854A',
  colorPrimary: '#DD702B',
  colorDarker: '#D65E12',

  colorBackground: '#1f1f1f',
  colorText: '#dfdfdf',

  // ------ ELEMENT STYLE VARIABLES -------
  portfolioRadius: '5px',
  borderGradient:
    'linear-gradient(135deg, ${props => props.theme.colorPrimary}aa 0%,${props => props.theme.colorSecondary}aa 100%)',
};

const colorArr = [
  // ------- COLOR -------
  // ORANGE
  {
    text: 'ORANGE',
    colorLighter: '#E3854A',
    colorPrimary: '#DD702B',
    colorDarker: '#D65E12',
  },
  // RED
  {
    text: 'RED',
    colorLighter: '#FF755D',
    colorPrimary: '#FF5D5B',
    colorDarker: '#FF5C71',
  },
  // BLUE
  {
    text: 'BLUE',
    colorLighter: '#4AC7D9',
    colorPrimary: '#4BB9DA',
    colorDarker: '#4AA9D9',
  },
  // GREEN
  {
    text: 'GREEN',
    colorLighter: '#3BF2D7',
    colorPrimary: '#2de5b4',
    colorDarker: '#21C9A4',
  },
  // PURPLE
  {
    text: 'PURP',
    colorLighter: '#C87DEF',
    colorPrimary: '#C664EC',
    colorDarker: '#AE47D6',
  },
  // AMERICA MODE
  // colorLighter: '#4BB9DA',
  // colorPrimary: '#eeeeee',
  // colorDarker: '#FF5C71',
];

export default IndexPage;
