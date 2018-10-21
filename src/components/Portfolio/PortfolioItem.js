import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  PortfolioItemWrapper,
  PortfolioItemHoverArea,
} from './PortfolioHelpers';

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
          <img src={project.image.resize.src} alt={project.title} />
        </Link>
        <PortfolioItemHoverArea>
          <h3>{title}</h3>
          <LinkContainer>
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
          </LinkContainer>
        </PortfolioItemHoverArea>
      </PortfolioItemWrapper>
      // </div>
    );
  }
}

const LinkContainer = styled.div`
  display: flex;
`;

export default PortfolioItem;
