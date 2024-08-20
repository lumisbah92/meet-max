import React from 'react';
import styled from 'styled-components';

const IconButton = ({
  iconSrc,
  text,
  onClick,
  bgColor,
  textColor,
  hoverBgColor,
  padding,
  borderRadius,
  fontSize,
  fontWeight,
  btnWidth,
  btnHeight,
  iconWidth,
  iconHeight,
  marginRight,
}) => {
  return (
    <Button
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
      hoverBgColor={hoverBgColor}
      padding={padding}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      btnWidth={btnWidth}
      btnHeight={btnHeight}
    >
      <Icon src={iconSrc} alt="icon" iconWidth={iconWidth} iconHeight={iconHeight} marginRight={marginRight} />
      {text}
    </Button>
  );
};

export default IconButton;

const Button = styled.button`
  width: ${({ btnWidth }) => btnWidth || '240px'};
  height: ${({ btnHeight }) => btnHeight || '52px'};

  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || '#007bff'};
  color: ${({ textColor }) => textColor || '#4E5D78'};
  padding: ${({ padding }) => padding || '8px 16px'};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || '#d1d8eb'};
  }
`;

const Icon = styled.img`
  width: ${({ iconWidth }) => iconWidth || '24px'};
  height: ${({ iconHeight }) => iconHeight || '24px'};
  margin-right: ${({ marginRight }) => marginRight || '8px'};
`;
