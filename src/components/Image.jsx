import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  border-radius: ${(props) => props.borderRadius ?? "0px"};
`;

export default Image;
