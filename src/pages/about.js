import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { media, sizes } from '../config/config';

import { DefaultContainer } from '../components/helpers';
import FrontEnd from '../components/Icons/FrontEnd';
import BackEnd from '../components/Icons/BackEnd';
import EverythingElse from '../components/Icons/EverythingElse';

import { withTheme } from 'styled-components';

const About = props => {
  console.log(props.theme);
  const { colorPrimary } = props.theme;
  const imgArr = [
    // <FrontEnd color="red" />,
    // <BackEnd color="red" />,
    // <EverythingElse color="red" />,
    <FrontEnd color={colorPrimary} />,
    <BackEnd color={colorPrimary} />,
    <EverythingElse color={colorPrimary} />,
  ];

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
  ${media.laptop`
    max-width: 900px;
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.2rem;
    }
  `};
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
  border: 1px solid ${props => props.theme.colorPrimary};
  border-radius: 15px;

  ${media.laptop`
    flex-direction: row;
    border: none;
  `};
`;

const SkillColumn = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 1rem;
  padding: 1.2rem;
  border-bottom: 1px solid ${props => props.theme.colorPrimary};
  :last-child {
    border-bottom: none;
  }
  svg {
    path, rect, polygon  {
      fill: ${props => props.theme.colorPrimary};
    }
    polyline, path {
      stroke: ${props => props.theme.colorPrimary};
    }
    height: 5rem;
    width: 90%;
    border-bottom: 2px solid ${props => props.theme.colorPrimary};
    margin-bottom: 0.8rem;
  }
  h4,
  h5 {
    color: ${props => props.theme.colorPrimary}dd;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  p {
    line-height: 1.1;
  }
  li {
    margin-bottom: 0.2rem;
    line-height: 1.15;
  }
  @media (min-width: ${sizes.laptop}px) {
    /* border: 2px solid ${props => props.theme.colorPrimary}; */
    border: 2px solid ${props => props.theme.colorPrimary}dd;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    svg {
      border-bottom: 2px solid ${props => props.theme.colorPrimary}dd;
      path, rect, polygon  {
        fill: ${props => props.theme.colorPrimary}dd;
      }
      polyline, path {
        stroke: ${props => props.theme.colorPrimary}dd;
      }
    }
    &:hover {
      border: 2px solid ${props => props.theme.colorPrimary};
      box-shadow: ${props => props.theme.colorPrimary}40 0px 8px 20px;
      transform: translateY(-3px);
      svg {
        border-bottom: 2px solid ${props => props.theme.colorPrimary};
        path, rect, polygon  {
          fill: ${props => props.theme.colorPrimary};
        }
        polyline, path {
          stroke: ${props => props.theme.colorPrimary};
        }
      }
      h4, h5 {
        color: ${props => props.theme.colorPrimary};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
    border-radius: 15px;
    :last-child {
      border-bottom: 1px solid ${props => props.theme.colorPrimary};
    }

    h4 {
      font-size: 1.4rem;
    }
    h5, p, li {
      font-size: 1.1rem;
    }
  };
  @media (min-width: ${sizes.hd}px) {
    svg {
      height: 6.5rem;
      /* width: 6.5rem; */
      border-bottom: 4px solid ${props => props.theme.colorPrimary}dd;
      margin-bottom: 1.2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5, p, li {
      font-size: 1.2rem;
    }
    &:hover {
      svg {
        border-bottom: 4px solid ${props => props.theme.colorPrimary};
      }
    }
  };

  /* width: */
  /* border: 1px solid ${props => props.theme.colorPrimary}; */
`;

export default withTheme(About);
