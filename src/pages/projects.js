import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { media } from '../config/media';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';
import { TagListAll } from '../components/Portfolio/TagList';

const PortfolioPage = () => {
  const [activeTags, setActiveTags] = React.useState(new Set());

  function parseTags(data) {
    const tags = new Set();

    data.allContentfulPortfolioProject.edges.forEach((project) => {
      project.node.tags.forEach((tag) => {
        tags.add(tag);
      });
    });

    return Array.from(tags);
  }

  function addTag(tag) {
    setActiveTags((prev) => new Set(prev).add(tag));
  }

  function removeTag(tag) {
    const arr = [...activeTags].filter((x) => x !== tag);
    setActiveTags(new Set(arr));
  }

  function handleToggle(tag) {
    if (activeTags.has(tag)) {
      removeTag(tag);
    } else {
      addTag(tag);
    }
  }

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
            <TagListAll
              handleToggle={handleToggle}
              activeTags={activeTags}
              tags={parseTags(data)}
            />
          </HeaderTextContainer>
          <ProjectsItemContainer>
            {data.allContentfulPortfolioProject.edges
              .filter(({ node }) => {
                return [...activeTags].every((activeTag) =>
                  node.tags.includes(activeTag)
                );
              })
              .map(({ node }) => (
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
