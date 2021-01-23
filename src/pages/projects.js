import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { media } from '../config/media';
import { ProjectItem } from '../components/Projects/ProjectItem';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';
import { TagListAll } from '../components/Projects/TagList';

const ProjectItemsContainer = ({ data, activeTags }) => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    console.log(activeTags);
    const filteredProjects = data.allContentfulPortfolioProject.edges.filter(
      ({ node }) => {
        return [...activeTags].every((activeTag) =>
          node.tags.includes(activeTag)
        );
      }
    );

    setProjects(filteredProjects);
  }, [data, activeTags]);

  return projects.length ? (
    <StyledProjectItemsContainer>
      {projects.map(({ node }) => (
        <ProjectItem project={node} key={node.id} />
      ))}
    </StyledProjectItemsContainer>
  ) : (
    <p className="not-found-message">You expect too much from me..</p>
  );
};

const ProjectsPage = ({ location }) => {
  const [activeTags, setActiveTags] = React.useState(
    new Set(location?.state?.activeTag ? [location.state.activeTag] : [])
  );

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
          <ProjectItemsContainer data={data} activeTags={activeTags} />
        </ProjectsContainer>
      )}
    />
  );
};

export const ProjectsContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  /* width: 90%; */
  .multi-select {
    width: 100%;
  }
  .not-found-message {
    font-size: 1.25rem;
  }
  ${media.laptop`
    max-width: 1040px;
  `}
  ${media.hd`
    max-width: 1380px;
  `};
`;

export const StyledProjectItemsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default ProjectsPage;
