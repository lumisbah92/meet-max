import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import COLOR from '../Assests/constants/color';

const Checkbox = ({ id, checked, onChange, label, size, backgroundColor, borderRadius, hoverColor, fontSize }) => (
  <CheckboxContainer>
    <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
    <StyledCheckbox
      checked={checked}
      size={size}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      hoverColor={hoverColor}
      onClick={onChange}
    >
      <Icon checked={checked} viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <Text fontSize="14px" fontWeight="700" lineHeight="22px">{label}</Text>
  </CheckboxContainer>
);

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: ${({ size }) => size || '16px'};
  height: ${({ size }) => size || '16px'};
  background: ${({ checked, backgroundColor }) => (checked ? backgroundColor || COLOR.primaryColor : '#fff')};
  border: 2px solid ${COLOR.textColor};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms;
  margin-right: 8px;

  &:hover {
    border-color: ${({ hoverColor }) => hoverColor || COLOR.primaryColor};
  }

  svg {
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }
`;

const Icon = styled.svg`
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;
