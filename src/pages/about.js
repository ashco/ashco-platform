import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { media, sizes } from '../config/media';

import { DefaultContainer } from '../components/helpers';
import FrontEnd from '../components/Icons/FrontEnd';
import BackEnd from '../components/Icons/BackEnd';
import EverythingElse from '../components/Icons/EverythingElse';

import { withTheme } from 'styled-components';

const About = props => {
  const { colorPrimary, colorLighter, colorDarker } = props.theme;
  const imgArr = [
    <FrontEnd color={colorDarker} />,
    <BackEnd color={colorPrimary} />,
    <EverythingElse color={colorLighter} />,
  ];
  const colorArr = [colorDarker, colorPrimary, colorLighter];

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
                <SkillColumnColor color={colorArr[i]} key={skill.node.id}>
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
                </SkillColumnColor>
              );
            })}
          </AboutSkillsContainer>
        </AboutContainer>
      )}
    />
  );
};

// const AngleSVG = () => {
//   return (
//     <AngleSVGWrapper
//       width="553px"
//       height="274px"
//       viewBox="0 0 553 274"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g
//         id="Page-2"
//         stroke="none"
//         stroke-width="1"
//         fill="none"
//         fill-rule="evenodd"
//       >
//         <g id="Artboard" fill="#000000">
//           <polygon id="Path" points="0 0 0 274 553 0" />
//         </g>
//       </g>
//     </AngleSVGWrapper>
//   );
// };

const AngleSVGWrapper = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  polygon {
    fill: ${props => props.theme.colorPrimary}90;
  }
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 1.9rem;
    font-weight: 600;
    color: ${props => props.theme.colorPrimary};
    border-bottom: 2px solid ${props => props.theme.colorPrimary};
    padding-bottom: 0.6rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.1;
    margin-top: 1rem;
  }
  @media (min-width: ${sizes.laptop}px) {
    max-width: 900px;
    h2 {
      border-bottom: 3px solid ${props => props.theme.colorPrimary};
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
    path,
    rect,
    polygon {
      fill: ${props => props.theme.colorPrimary};
    }
    polyline,
    path {
      stroke: ${props => props.theme.colorPrimary};
    }
    height: 5rem;
    width: 90%;
  }
  h4 {
    border-bottom: 2px solid ${props => props.theme.colorSecondary};
    padding-bottom: 0.8rem;
    margin-top: -0.6rem;
    margin-bottom: 0.8rem;
  }
  h5 {
    margin-bottom: 0.3rem;
  }
  h4,
  h5 {
    color: ${props => props.theme.colorPrimary}dd;
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
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-radius: 15px;
    :last-child {
    }
    h4 {
      font-size: 1.4rem;
    }
    h5,
    p,
    li {
      font-size: 1.1rem;
    }
    &:hover {
      transform: translateY(-3px);
      h4,
      h5 {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
  }
  @media (min-width: ${sizes.hd}px) {
    svg {
      height: 6.5rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5,
    p,
    li {
      font-size: 1.2rem;
    }
  }
`;

const SkillColumnColor = styled(SkillColumn)`
  border-bottom: 1px solid ${props => props.color};
  svg {
    path,
    rect,
    polygon {
      fill: ${props => props.color};
    }
    polyline,
    path {
      stroke: ${props => props.color};
    }
  }
  h4 {
    border-bottom: 2px solid ${props => props.color};
  }
  h4,
  h5 {
    color: ${props => props.color}dd;
  }
  @media (min-width: ${sizes.laptop}px) {
    border: 2px solid ${props => props.color}dd;
    :last-child {
      border-bottom: 2px solid ${props => props.color};
    }
    svg {
      path,
      rect,
      polygon {
        fill: ${props => props.color}dd;
      }
      polyline,
      path {
        stroke: ${props => props.color}dd;
      }
    }
    h4 {
      border-bottom: 3px solid ${props => props.color}dd;
    }
    &:hover {
      border: 2px solid ${props => props.color};
      box-shadow: ${props => props.color}40 0px 8px 20px;
      svg {
        path,
        rect,
        polygon {
          fill: ${props => props.color};
        }
        polyline,
        path {
          stroke: ${props => props.color};
        }
      }
      h4 {
        border-bottom: 3px solid ${props => props.color};
      }
      h4,
      h5 {
        color: ${props => props.color};
      }
    }
  }
  @media (min-width: ${sizes.hd}px) {
    border: 3px solid ${props => props.color}dd;
    h4 {
      border-bottom: 4px solid ${props => props.color}dd;
    }
    &:hover {
      border: 3px solid ${props => props.color};
      h4 {
        border-bottom: 4px solid ${props => props.color};
      }
    }
  }
`;

export default withTheme(About);
