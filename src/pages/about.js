import React, { Component } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../components/helpers';

const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    color: #d27831;
    font-weight: 600;
  }
  h5 {
    font-weight: 600;
    color: #d27831;
  }
`;

const SkillColumn = styled.div`
  text-align: center;
`;

const About = ({ data }) => {
  return (
    <div>
      <AboutContentWrapper>
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
                <p>{skill.node.listItems1.map(item => item)}</p>
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
      </AboutContentWrapper>
    </div>
  );
};

export default About;

export const query = graphql`
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
`;
