import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Select from 'react-select';

import { media } from '../config/media';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#222',
    // borderBottom: '1px dotted pink',
    // color: state.isSelected ? 'red' : 'blue',
    // padding: 20,
    // border: '2px solid red',
  }),
  control: (provided, theme) => ({
    // none of react-select's styles are passed to <Control />
    // width: 200,
    ...provided,
    // border: `2px solid ${theme}`,
  }),
  singleValue: (provided, state) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    // return { ...provided, opacity, transition };
    return { ...provided };
  },
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const PortfolioPage = () => {
  // const [tags, setTags] = React.useState(new Set());

  return (
    <StaticQuery
      query={graphql`
        query PortfolioList {
          allContentfulPortfolioProject(
            sort: { fields: [order], order: DESC }
          ) {
            edges {
              node {
                id
                title
                slug
                tags
                image {
                  id
                  fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <ProjectsContainer>
          <Helmet
            title="Projects"
            meta={[
              {
                name: 'description',
                content:
                  "A list of digital creations by Ashton Christie. I'm always looking for something new to build, so sell me on your awesome idea an I'll make it a reality.",
              },
            ]}
          />
          <HeaderTextContainer>
            <h2>Check out this amazingness!</h2>
            <p>
              Here are a few of the projects that I have worked on. More are on
              the way!
            </p>
            {/* <Select
              isMulti
              className="multi-select"
              options={options}
              styles={selectStyles}
              // theme={this.props.theme}
            /> */}
            {console.log(data)}
          </HeaderTextContainer>
          <ProjectsItemContainer>
            {data.allContentfulPortfolioProject.edges.map(({ node }) => (
              <PortfolioItem project={node} key={node.id} />
            ))}
          </ProjectsItemContainer>
        </ProjectsContainer>
      )}
    />
  );
};

export const ProjectsContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1040px;
  .multi-select {
    width: 100%;
  }
  ${media.hd`
    max-width: 1380px;
  `};
`;

const ProjectsItemContainer = styled.div`
  width: 90%;
`;

export default PortfolioPage;
