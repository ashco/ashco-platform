import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  MainContainer,
  PortfolioListingWrapper,
  PortfolioHoverArea,
  // LinkIcon,
} from '../helpers';

import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

// import githubIcon from '../../images/icons/github-brands.svg';
// import desktopIcon from '../../images/icons/desktop-solid.svg';

const LinkContainer = styled.div`
  display: flex;
`;

class PortfolioListing extends Component {
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
      <div>
        <PortfolioListingWrapper>
          <Link to={`/projects/${project.slug}`}>
            <img src={project.image.resize.src} alt={project.title} />
          </Link>
          <PortfolioHoverArea>
            <h3>{title}</h3>
            <LinkContainer>
              <a
                href={project.liveSiteLink}
                target="_blank"
                onMouseEnter={e => this.updateTitle('Live Site', e)}
                onMouseLeave={e => this.updateTitle(project.title, e)}
              >
                {/* <LinkIcon
                  src={desktopIcon}
                  alt="Project live link"
                  size="60px"
                /> */}
                <DesktopIcon />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                onMouseEnter={e => this.updateTitle('Github', e)}
                onMouseLeave={e => this.updateTitle(project.title, e)}
              >
                {/* <LinkIcon
                  src={githubIcon}
                  alt="Project Github link"
                  size="60px"
                /> */}
                <GithubIcon />
              </a>
            </LinkContainer>
          </PortfolioHoverArea>
        </PortfolioListingWrapper>
      </div>
    );
  }
}

export default PortfolioListing;
