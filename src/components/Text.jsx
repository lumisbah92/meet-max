import styled from 'styled-components';
import COLOR from '../Assests/constants/color';

const Text = styled.span`
  color: ${(props) => props.color ?? COLOR.textColor};
  font-size: ${(props) => props.fontSize ?? "18px"};
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineHeight ?? "normal"};
`;

export default Text;
