import React from 'react';
import styled from 'styled-components';
import COLOR from '../../Assests/constants/color'

const RadioButton = ({ id, name, value, checked, onChange, label, size, color, fontSize }) => {
  return (
    <RadioButtonContainer>
      <RadioInput
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        size={size}
        color={color}
      />
      <RadioLabel htmlFor={id} fontSize={fontSize}>
        {label}
      </RadioLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;

const RadioButtonContainer = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  border: 1px solid ${COLOR.textColor};
  border-radius: 50%;
  width: ${({ size }) => size || '20px'};
  height: ${({ size }) => size || '20px'};
  cursor: pointer;
  position: relative;

  &:checked {
    border: 1px solid ${({ color }) => color || COLOR.primaryColor};
  }

  &:checked::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({ size }) => `calc(${size || '20px'} / 2)`};
    height: ${({ size }) => `calc(${size || '20px'} / 2)`};
    border-radius: 50%;
    background: ${COLOR.primaryColor};
    transform: translate(-50%, -50%);
  }
`;

const RadioLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || COLOR.textColor};
  font-weight: 700;
`;
