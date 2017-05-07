import styled from 'styled-components';

const TransparentBackground = styled.div`
  background-color: rgba(0, 0, 0, 0);
  padding: ${props => props.large && '10rem 1.5rem'};
`;

export default TransparentBackground;
