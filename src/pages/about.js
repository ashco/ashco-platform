import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { media, sizes } from '../config/media';
import { Link } from 'gatsby';
import { DefaultContainer } from '../components/helpers';
import FrontEnd from '../components/Icons/FrontEnd';
import BackEnd from '../components/Icons/BackEnd';
import EverythingElse from '../components/Icons/EverythingElse';

import { withTheme } from 'styled-components';

const About = props => {
  const imgArr = [<FrontEnd />, <BackEnd />, <EverythingElse />];

  return (
    <StaticQuery
      query={graphql`
        query AboutList {
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
          <Helmet
            title="About"
            meta={[{ name: 'description', content: 'All about Ashton. Yep, this pretty much sums it all up..' }]}
          />
          <AboutInfoContainer>
            <h2>Hi, I'm Ash. I build things.</h2>
            <p>
              I'm a Full-Stack Web-Dev that specializes in{' '}
              <a
                href="https://reactjs.org/"
                title="Reactjs"
                aria-label="React"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              . I'm a lifelong learner, and complex thing interest me. I love
              the challenges of coding and push myself past my limits with each
              project. My goal is to make a positive impact in the world and am
              excited to apply my skills wherever I go. Always happy to share my
              experiences and what I've learned so far, so{' '}
              <Link to="/contact/">hit me up!</Link>
            </p>
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
                    {skill.node.listItems2.map(item => (
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colorPrimary};
    transition: all 0.2s linear;
  }

  ${media.laptop`
    max-width: 1200px;
  `};
  ${media.hd`
    max-width: 1440px;
  `};
`;

const AboutInfoContainer = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 1.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colorPrimary};
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    padding: 0 1.5rem 0.6rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.1;
    margin-top: 1rem;
  }
  @media (min-width: ${sizes.laptop}px) {
    max-width: 900px;
    h2 {
      border-bottom: 3px solid ${({ theme }) => theme.colorPrimary};
      width: 60%;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  ${media.hd`
    max-width: 1000px;
    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.35rem;
    }
  `};
`;

const AboutSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 15px;
  margin-bottom: 2rem;

  ${media.laptop`
    flex-direction: row;
    border: none;
  `};
`;

const SkillColumn = styled.div`
  text-align: center;
  width: 95%;
  margin: 0 1rem;
  padding: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
  :last-child {
    border-bottom: none;
  }
  svg {
    path,
    rect,
    polygon {
      fill: ${({ theme }) => theme.colorPrimary};
    }
    polyline,
    path {
      stroke: ${({ theme }) => theme.colorPrimary};
    }
    height: 5rem;
    width: 90%;
  }
  h4 {
    border-bottom: 2px solid ${({ theme }) => theme.colorSecondary};
    padding-bottom: 0.8rem;
    margin-top: -0.6rem;
    margin-bottom: 0.8rem;
  }
  h5 {
    margin-bottom: 0.3rem;
  }
  h4,
  h5 {
    color: ${({ theme }) => theme.colorPrimary}dd;
    font-weight: 600;
  }
  p {
    line-height: 1.1;
  }
  li {
    margin-bottom: 0.2rem;
    line-height: 1.15;
  }
  @media (min-width: ${sizes.laptop}px) {
    border: 2px solid ${({ theme }) => theme.colorPrimary}dd;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-radius: 15px;
    :last-child {
      border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    }
    svg {
      path,
      rect,
      polygon {
        fill: ${({ theme }) => theme.colorPrimary}dd;
      }
      polyline,
      path {
        stroke: ${({ theme }) => theme.colorPrimary}dd;
      }
    }
    h4 {
      font-size: 1.4rem;
      border-bottom: 3px solid ${({ theme }) => theme.colorPrimary}dd;
    }
    h5,
    p,
    li {
      font-size: 1.1rem;
    }
    &:hover {
      border: 2px solid ${({ theme }) => theme.colorPrimary};
      box-shadow: ${({ theme }) => theme.colorPrimary}40 0px 8px 20px;
      transform: translateY(-3px);
      svg {
        path,
        rect,
        polygon {
          fill: ${({ theme }) => theme.colorPrimary};
        }
        polyline,
        path {
          stroke: ${({ theme }) => theme.colorPrimary};
        }
      }
      h4 {
        border-bottom: 3px solid ${({ theme }) => theme.colorPrimary};
      }
      h4,
      h5 {
        color: ${({ theme }) => theme.colorPrimary};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
  }
  @media (min-width: ${sizes.hd}px) {
    border: 3px solid ${({ theme }) => theme.colorPrimary}dd;
    svg {
      height: 6.5rem;
    }
    h4 {
      border-bottom: 4px solid ${({ theme }) => theme.colorPrimary}dd;
      font-size: 1.6rem;
    }
    h5,
    p,
    li {
      font-size: 1.2rem;
    }
    &:hover {
      border: 3px solid ${({ theme }) => theme.colorPrimary};
      h4 {
        border-bottom: 4px solid ${({ theme }) => theme.colorPrimary};
      }
    }
  }
`;

export default withTheme(About);
