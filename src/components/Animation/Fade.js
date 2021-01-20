import styled, { css } from 'styled-components';

const FadeWrapper_Visible = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.25s linear;
`;

const FadeWrapper_Visible_Delay = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.25s linear 2.5s;
`;

const FadeWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s linear;
  ${({ visible, homeTimeout }) =>
    visible && (homeTimeout ? FadeWrapper_Visible_Delay : FadeWrapper_Visible)};
`;

export default FadeWrapper;
