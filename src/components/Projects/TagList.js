import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagListWrapper = styled.ul`
  display: flex;
  /* gap: 0.5rem; */
  flex-wrap: wrap;
  justify-content: ${(props) => (props.selected ? 'flex-start' : 'center')};
`;

export const Tag = styled.li`
  padding: 0.25rem 0.5rem;
  color: ${(props) => (props.active ? '#222222' : props.theme.textColor)};
  margin: 0 0.5rem 0.5rem 0;
  background-color: ${(props) =>
    props.active
      ? props.theme.colorPrimary + 'dd'
      : props.theme.colorBackground};

  border: 2px solid ${(props) => props.theme.colorPrimary}dd;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  /* &:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    box-shadow: ${({ theme }) => theme.colorPrimary}40 2px 4px 8px;
    transform: translateY(-2px);
  } */
  &:active {
    background-color: ${(props) => props.theme.colorPrimary};
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.colorPrimary}40 2px 4px 8px;
      transform: translateY(-2px);
    }
  }
`;

export function TagListAll({ tags, activeTags, handleToggle }) {
  return (
    <TagListWrapper>
      {tags &&
        tags.map((tag, i) => (
          <Tag
            active={activeTags.has(tag)}
            key={i}
            onClick={() => handleToggle(tag)}
          >
            {tag}
          </Tag>
        ))}
    </TagListWrapper>
  );
}

export function TagListSelected({ tags }) {
  return (
    <TagListWrapper selected={true}>
      {tags &&
        tags.map((tag, i) => (
          <Link key={i} to="/projects" state={{ activeTag: tag }}>
            <Tag active={true}>{tag}</Tag>
          </Link>
        ))}
    </TagListWrapper>
  );
}
