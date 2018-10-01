import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import {
  PortfolioListingWrapper,
  PortfolioHoverArea,
  LinkIcon,
} from '../helpers';

import githubIcon from '../../images/icons/github-brands.svg';
import desktopIcon from '../../images/icons/desktop-solid.svg';

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
        </Link>
        <PortfolioHoverArea>
          <h3>{title}</h3>
          <LinkContainer>
            <a
              href={project.liveSiteLink}
              target="_blank"
              onMouseEnter={this.updateTitle.bind(null, 'Live Site')}
              onMouseLeave={this.updateTitle.bind(null, project.title)}
            >
              <LinkIcon src={desktopIcon} alt="Project live link" size="60px" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              // REDO THIS WITH MORE EFFICENT WAY
              onMouseEnter={this.updateTitle.bind(null, 'Github')}
              onMouseLeave={this.updateTitle.bind(null, project.title)}
            >
              <LinkIcon
                src={githubIcon}
                alt="Project Github link"
                size="60px"
              />
            </a>
          </LinkContainer>
        </PortfolioHoverArea>
      </PortfolioListingWrapper>
    );
  }
}

export default PortfolioListing;
