import styled from 'styled-components';

const AnchorPoint = styled.div`
  position: absolute;
  /* top: ${props => (props.isMobile ? '-140px' : '-13vh')}; */
  top: calc(-13vh - 7px);
`;

export default AnchorPoint;
