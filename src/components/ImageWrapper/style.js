import styled from 'styled-components';

const ImageWrapperStyle = styled.div`
  width: 8.1875rem;
  height: 8.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: -3.75rem auto 0;

  background-color: var(--white);
  color: var(--black);

  @media (min-width: 800px) {
    width: 12.1875rem;
    height: 12.1875rem;

    margin-top: -5rem;
  }

  ${(props) => {
    if (props.small) {
      return `width: 5rem; 
      height: 5rem;
      
      margin: 0 0 0 0.5rem;
      
      @media (min-width: 800px) {
        width: 6.1875rem;
        height: 6.1875rem;

        margin: 0 0 0 0.5rem;
        
  }`;
    }
  }}
`;

export default ImageWrapperStyle;