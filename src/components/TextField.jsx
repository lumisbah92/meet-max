import React, { useState } from 'react';
import styled from 'styled-components';
import EyeOff from '../Assests/images/Eye-Off.svg';
import Eye from '../Assests/images/Eye.svg';

const TextField = ({
  iconSrc,
  placeholder,
  width,
  height,
  border,
  borderRadius,
  iconWidth,
  iconHeight,
  textColor,
  bgColor,
  padding,
  fontWeight,
  fontSize,
  lineHeight,
  inputType = 'text',
  placeholderColor,
  placeholderFontWeight,
  placeholderFontSize,
  haveIcon = true,
  value, 
  onChange
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleIconClick = () => {
    if (inputType === 'password') {
      setIsShow(prev => !prev);
    }
  };

  return (
    <TextFieldContainer
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      bgColor={bgColor}
      padding={padding}
    >
      {haveIcon && <Icon
        src={iconSrc}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      />}
      <Input
        type={inputType === 'password' && !isShow ? 'password' : 'text'}
        placeholder={placeholder}
        textColor={textColor}
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
        placeholderColor={placeholderColor}
        placeholderFontWeight={placeholderFontWeight}
        placeholderFontSize={placeholderFontSize}
        value={value}
        onChange={onChange}
      />
      {inputType === 'password' && (
        <Icon
          onClick={handleIconClick}
          src={isShow ? Eye : EyeOff}
          iconWidth={16}
          iconHeight={16}
          style={{ cursor: 'pointer' }}
        />
      )}
    </TextFieldContainer>
  );
};

export default TextField;

const TextFieldContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height || '52px'};
  border: ${({ border }) => border || "1px solid rgba(78, 93, 120, 0.2)"};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  overflow: hidden;
  padding: ${({ padding }) => padding || "10px 20px"};
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: ${({ iconWidth }) => iconWidth || '16px'};
  height: ${({ iconHeight }) => iconHeight || '16px'};
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ textColor }) => textColor || "rgba(78, 93, 120, 1)"};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
  
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "rgba(78, 93, 120, 0.6)"};
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ placeholderFontWeight }) => placeholderFontWeight || '400'};
    font-size: ${({ placeholderFontSize }) => placeholderFontSize || '14px'};
  }
`;
