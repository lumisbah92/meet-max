import styled from 'styled-components';
import COLOR from '../../Assests/constants/color';

const Button = styled.button`
  width: ${({ btnWidth }) => btnWidth || '500px'};
  height: ${({ btnHeight }) => btnHeight || '52px'};
  background-color: ${({bgColor}) => bgColor || COLOR.primaryColor};
  color: ${({textColor}) => textColor || "white"};
  border: ${({border}) => border || "none"};
  border-radius: ${({borderRadius}) => borderRadius || "10px"};;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || '#789ef0'};
  }
`;

export default Button;
