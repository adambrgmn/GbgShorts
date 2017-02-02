import styled from 'styled-components';

export default styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 0 0 5rem 0;
  margin: 0;
  background: ${({ bg }) => bg};
`;
