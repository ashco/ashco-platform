import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { LinkIcon } from '../helpers';

import githubIcon from '../../images/icons/github-brands.svg';
import desktopIcon from '../../images/icons/desktop-solid.svg';

const PortfolioListingWrapper = styled.article`
  width: 440px;
  position: relative;
  img {
    display: block;
    transition: 0.5s ease;
  }
  &:hover {
    img {
      opacity: 0.3;
    }
  }
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const PortfolioHoverArea = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LinkContainer = styled.div`
  display: flex;
`;

// const PortfolioListing = ({ project }) => (
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
      <PortfolioListingWrapper>
        <Link to={`/portfolio/${project.slug}`}>
          <img src={project.image.resize.src} alt={project.title} />
          <PortfolioHoverArea>
            {/* <h3>{project.title}</h3> */}
            <h3>{title}</h3>
            <LinkContainer>
              <a
                href={project.githubLink}
                // REDO THIS WITH MORE EFFICENT WAY
                onMouseEnter={this.updateTitle.bind(null, 'Github Link')}
                onMouseLeave={this.updateTitle.bind(null, project.title)}
              >
                <LinkIcon
                  src={githubIcon}
                  alt="Project Github link"
                  size="60px"
                />
              </a>
              <a
                href={project.liveSiteLink}
                onMouseEnter={this.updateTitle.bind(null, 'Live Link')}
                onMouseLeave={this.updateTitle.bind(null, project.title)}
              >
                <LinkIcon
                  src={desktopIcon}
                  alt="Project live link"
                  size="60px"
                />
              </a>
            </LinkContainer>
          </PortfolioHoverArea>
        </Link>
      </PortfolioListingWrapper>
    );
  }
}

export default PortfolioListing;
