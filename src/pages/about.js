import React, { Component } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../components/helpers';

const AboutContentWrapper = styled.div`
  display: flex;
`;

const AboutInfoContainer = styled.div`
  width: 70%;
`;

const AboutSkillsContainer = styled.div`
  width: 30%;
  margin-left: 20px;
  h4 {
    font-weight: 600;
  }
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
          <h4>{data.contentfulAboutInfo.title}</h4>
          <ul>
            {data.contentfulAboutInfo.listItems.map(item => (
              <li>-{item}</li>
            ))}
          </ul>
        </AboutSkillsContainer>
      </AboutContentWrapper>
    </div>
  );
};

export default About;

export const query = graphql`
  query AboutList {
    contentfulAboutInfo {
      id
      title
      listItems
    }
  }
`;
