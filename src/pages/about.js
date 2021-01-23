import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { media, sizes } from '../config/media';
import { Link } from 'gatsby';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';
import FrontEnd from '../components/Icons/FrontEnd';
import BackEnd from '../components/Icons/BackEnd';
import EverythingElse from '../components/Icons/EverythingElse';
import { Button } from '../components/Buttons';

import { withTheme } from 'styled-components';

const About = (props) => {
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
      render={(data) => (
        <AboutContainer>
          <Helmet
            title="About"
            meta={[
              {
                name: 'description',
                content:
                  'All about Ash. Yep, this pretty much sums it all up..',
              },
            ]}
          />
          <HeaderTextContainer>
            <h2>Hi, I'm Ashton. I build stuff.</h2>
            <p>
              I am a Seattle based Full-Stack developer who believes that
              there's always something new worth learning, success comes from
              seeking out what makes you uncomfortable, and that there's always
              time for laughs. I'm always looking for new projects, so if you
              need a website built, a technical problem solved, or just someone
              to grab a coffee with, don't wait...
            </p>
            <Link to="/contact/">
              <Button>Say Hello!</Button>
            </Link>
          </HeaderTextContainer>
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
                    {skill.node.listItems2.map((item) => (
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
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colorPrimary};
    /* transition: all 0.2s linear; */
    /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover {
      box-shadow: ${({ theme }) => theme.colorPrimary}40 0px 8px 20px;
      transform: translateY(-2px);
    } */
  }

  ${media.laptop`
    max-width: 1200px;
  `};
  ${media.hd`
    max-width: 1440px;
  `};
`;

const AboutSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 15px;
  margin: auto 1rem;

  box-shadow: ${({ theme }) => theme.colorPrimary}40 0px 8px 20px;
  transform: translateY(-3px);
  background-color: ${({ theme }) => theme.colorBackground};

  ${media.laptop`
    background-color: transparent;
    box-shadow: none;
    transform: translateY(0px);
    flex-direction: row;
    border: none;
  `};
`;

const SkillColumn = styled.div`
  text-align: center;
  width: 95%;
  padding: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
  :last-child {
    border-bottom: none;
  }
  background: ${({ theme }) => theme.colorBackground};
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
    padding-bottom: 0.75rem;
  }
  li {
    margin-bottom: 0.2rem;
    line-height: 1.15;
  }
  @media (min-width: ${sizes.laptop}px) {
    border: 3px solid ${({ theme }) => theme.colorPrimary}dd;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-radius: 15px;
    margin-left: 1rem;
    :last-child {
      margin-right: 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    }
    svg {
      height: 6.5rem;
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
        border-bottom: 4px solid ${({ theme }) => theme.colorPrimary};
      }
      h4,
      h5 {
        color: ${({ theme }) => theme.colorPrimary};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
  }
`;

export default withTheme(About);
