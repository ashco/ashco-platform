import styled, { css } from 'styled-components';

const FadeWrapper_Visible = css`
  visibility: visible;
  opacity: 1;
`;

const FadeWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  ${({ visible }) => visible && FadeWrapper_Visible}
`;

export default FadeWrapper;
