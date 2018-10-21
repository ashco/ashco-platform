import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { MainContainer } from '../components/helpers';

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutList {
          contentfulAboutInfo {
            aboutMe {
              aboutMe
            }
          }
          allContentfulAboutDataColumn {
            edges {
              node {
                columnNum
                id
                title
                description {
                  id
                  description
                }
                listHeader1
                listItems1
                listHeader2
                listItems2
              }
            }
          }
        }
      `}
      render={data => (
        <MainContainer
          width="1200px"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AboutInfoContainer>
            <p>{data.contentfulAboutInfo.aboutMe.aboutMe}</p>
          </AboutInfoContainer>
          <AboutSkillsContainer>
            {data.allContentfulAboutDataColumn.edges.map(skill => {
              return (
                <SkillColumn key={skill.node.id}>
                  <h4>{skill.node.title}</h4>
                  <p>{skill.node.description.description}</p>
                  <h5>{skill.node.listHeader1}</h5>
                  <p>{skill.node.listItems1.join(', ')}</p>
                  <h5>{skill.node.listHeader2}</h5>
                  <ul>
                    {skill.node.listItems1.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </SkillColumn>
              );
            })}
          </AboutSkillsContainer>
        </MainContainer>
      )}
    />
  );
};

const AboutInfoContainer = styled.div`
  width: 60%;
  text-align: center;
`;

const AboutSkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding: 5rem;
  margin-left: 20px;
  h4 {
    color: ${props => props.theme.colorPrimary};
    font-weight: 600;
  }
  h5 {
    font-weight: 600;
    color: ${props => props.theme.colorPrimary};
  }
`;

const SkillColumn = styled.div`
  text-align: center;
  width: 25vw;
  margin: 0 1rem;
`;

export default About;
