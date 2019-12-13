import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../config/media';

class PortfolioItem extends PureComponent {
  render() {
    const { project, selected } = this.props;
    return (
      <PortfolioItemWrapper selected={selected}>
        <Link to={`/projects/${project.slug}/`}>
          <div className="overlay">
            <h3>{project.title}</h3>
          </div>
          <Img fluid={project.image.fluid} alt={project.title} />
        </Link>
      </PortfolioItemWrapper>
    );
  }
}

const PortfolioItemWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0.85rem auto;
  border-radius: 5px;
  box-shadow: none;
  border-bottom: none;
  overflow: hidden;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  a {
    width: 100%;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      color: ${({ theme }) => theme.colorText};
      margin-left: 0.6rem;
      font-size: 2.2rem;
      font-weight: 600;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }
  }

  .gatsby-image-wrapper {
    opacity: 0.5;
    border-radius: 5px;
    width: 100%;
    height: 60vw;
    max-height: 400px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 15px 5px;
    transform: scale(1.03);
    .overlay h3 {
      font-size: 2.5rem;
    }
    .gatsby-image-wrapper {
      transform: scale(1.03);
    }
  }
  ${media.laptop`
    margin: 15px 20px;
    .overlay h3 {
      font-size: 2.5rem;
    }
    &:hover {
      .overlay h3 {
        font-size: 2.8rem;
      }
    }
    .gatsby-image-wrapper {
      margin: 0;
    }
  `};
  ${media.desktop`
    .overlay h3 {
      font-size: 2.7rem;
    }
    &:hover {
      .overlay h3 {
        font-size: 3rem;
      }
    }
  `};
  ${media.hd`
    max-width: 1400px;
  `};
`;

export default PortfolioItem;
