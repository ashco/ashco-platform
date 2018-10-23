import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { DefaultContainer } from '../components/helpers';
import FrontEnd from '../components/Icons/FrontEnd';
import BackEnd from '../components/Icons/BackEnd';
import Chicken from '../components/Icons/Chicken';

const About = () => {
  const imgArr = [<FrontEnd />, <BackEnd />, <Chicken />];

  return (
    <StaticQuery
      query={graphql`
        query AboutList {
          contentfulAboutInfo {
            aboutMe {
              aboutMe
            }
          }
          allContentfulAboutDataColumn(
            sort: { fields: [columnNum], order: ASC }
          ) {
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
        <AboutContainer>
          <AboutInfoContainer>
            <h2>Hi, I'm Ash. I build things.</h2>
            <p>{data.contentfulAboutInfo.aboutMe.aboutMe}</p>
          </AboutInfoContainer>
          <AboutSkillsContainer>
            {data.allContentfulAboutDataColumn.edges.map((skill, i) => {
              return (
                <SkillColumn key={skill.node.id}>
                  {imgArr[i]}
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
        </AboutContainer>
      )}
    />
  );
};

const AboutContainer = styled(DefaultContainer)`
  /* width: 1200px; */
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutInfoContainer = styled.div`
  /* width: 60%; */
  max-width: 700px;
  text-align: center;
  margin: 1rem 0 2rem 0;
  /* border-radius: 10px; */
  h2 {
    font-size: 1.9rem;
    font-weight: 600;
    color: ${props => props.theme.colorPrimary};
  }
  p {
    font-size: 1.1rem;
    line-height: 1.1;
    margin-top: 1rem;
  }
`;

const AboutSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${props => props.theme.colorPrimary};
  border-radius: 15px;

  /* width: 80%; */
  /* padding: 5rem; */
  /* margin-left: 20px; */
  svg {
    height: 5rem;
    width: 5rem;
    border-bottom: 2px solid ${props => props.theme.colorPrimary};
    margin-bottom: 0.8rem;
  }
  h4,
  h5 {
    color: ${props => props.theme.colorPrimary};
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  p {
    line-height: 1.1;
  }
  li {
    margin-bottom: 0.2rem;
  }
`;

const SkillColumn = styled.div`
  text-align: center;
  /* width: 25vw; */
  margin: 0 1rem;
  padding: 1.2rem;
  border-bottom: 1px solid ${props => props.theme.colorPrimary};
  :last-child {
    border-bottom: none;
  }
  /* width: */
  /* border: 1px solid ${props => props.theme.colorPrimary}; */
`;

export default About;
