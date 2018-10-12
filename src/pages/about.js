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
    font-weight: 600;
    color: orangered;
  }
  h5 {
    font-weight: 600;
    color: orangered;
  }
`;

const SkillColumn = styled.div`
  text-align: center;
`;

const About = ({ data }) => {
  return (
    <div>
      <PageTitle text="About" />
      <AboutContentWrapper>
        <AboutInfoContainer>
          <p>
            Hi, I’m Ashton. I'm a lifelong learner and love the challenges of
            coding. I've been interested in tech since I was young and have
            grown familiar with many aspects of the industry. I’ve worked in the
            clouds, solved problems way past my bedtime, and even built a mining
            rig (or three). I'm excited to apply these skills to whatever I do
            going forward and am happy to talk about my experiences so far. Hit
            me up!
          </p>
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
                    <li>{item}</li>
                  ))}
                </ul>
              </SkillColumn>
            );
          })}
          {console.log(data)}
          {/* <h4>{data.allContentfulAboutDataColumn.}</h4> */}
          {/* <ul>
              {data.contentfulAboutInfo.listItems.map(item => (
                <li>{item}</li>
              ))}
            </ul> */}
          {/* <SkillColumn>
            <h4>{data.contentfulAboutInfo.title}</h4>
            <ul>
              {data.contentfulAboutInfo.listItems.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </SkillColumn>
          <SkillColumn>
            <h4>{data.contentfulAboutInfo.title}</h4>
            <ul>
              {data.contentfulAboutInfo.listItems.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </SkillColumn> */}
        </AboutSkillsContainer>
      </AboutContentWrapper>
    </div>
  );
};

export default About;

export const query = graphql`
  query AboutList {
    #   contentfulAboutInfo {
    #     id
    #     title
    #     listItems
    #   }
    # }
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
