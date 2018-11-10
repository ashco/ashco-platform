import styled, { css } from 'styled-components';

const FadeWrapper_Visible = css`
  visibility: visible;
  opacity: 1;
  transition: ${({ heroImg }) => (heroImg ? 'none' : 'all 0.15s linear')};
`;

const FadeWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: ${({ heroImg }) => (heroImg ? 'none' : 'all 0.15s linear')};
  ${({ visible }) => visible && FadeWrapper_Visible};
`;

export default FadeWrapper;
