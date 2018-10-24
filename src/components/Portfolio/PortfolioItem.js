import React, { Component } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../config/config';

import { PortfolioItemWrapper, PortfolioItemOverlay } from './PortfolioHelpers';

import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

class PortfolioItem extends Component {
  state = {};

  componentDidMount() {
    this.setState({ title: this.props.project.title });
  }

  updateTitle = text => {
    this.setState({
      title: text,
    });
  };

  render() {
    const { title } = this.state;
    const { project } = this.props;
    return (
      // <div>
      <PortfolioItemWrapper>
        <Link to={`/projects/${project.slug}`}>
          <div className="overlay">
            <h3>{title}</h3>
          </div>
          <Img
            style={
              {
                // // position: 'absolute',
                // // left: 0,
                // // top: 0,
                // width: '400px',
                // height: '240px',
              }
            }
            fluid={project.image.fluid}
            alt={project.title}
          />
          {/* <img src={project.image.resize.src} alt={project.title} /> */}
        </Link>
        {/* <PortfolioItemOverlay>
          <h3>{title}</h3>
          <div style={{ display: 'flex' }}>
            <a
              href={project.liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={e => this.updateTitle('Live Site', e)}
              onMouseLeave={e => this.updateTitle(project.title, e)}
            >
              <DesktopIcon />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={e => this.updateTitle('Github', e)}
              onMouseLeave={e => this.updateTitle(project.title, e)}
            >
              <GithubIcon />
            </a>
          </div>
        </PortfolioItemOverlay> */}
      </PortfolioItemWrapper>
      // </div>
    );
  }
}

// const LinkContainer = styled.div`
//   display: flex;
// `;

export default PortfolioItem;
