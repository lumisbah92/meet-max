import React from 'react';
import styled from 'styled-components';

const BottomBarIconButton = ({
  iconSrc,
  text,
  onClick,
  isSelected,
  selectedLineColor,
  bgColor,
  textColor,
  hoverBgColor,
  padding,
  borderRadius,
  fontSize,
  fontWeight,
  iconWidth,
  iconHeight,
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
      isSelected={isSelected}
      selectedLineColor={selectedLineColor}
    >
      <Icon src={iconSrc} alt="icon" iconWidth={iconWidth} iconHeight={iconHeight} />
      <Text>{text}</Text>
      {isSelected && <SelectedLine selectedLineColor={selectedLineColor} />}
    </Button>
  );
};

export default BottomBarIconButton;

const Button = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  justify-content: start;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  color: ${({ textColor }) => textColor || '#4E5D78'};

  border: none;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '10px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  position: relative;
  transition: background-color 0.3s;
`;

const Icon = styled.img`
  width: ${({ iconWidth }) => iconWidth || '16px'};
  height: ${({ iconHeight }) => iconHeight || '16px'};
`;

const Text = styled.span`

`;

const SelectedLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ selectedLineColor }) => selectedLineColor || '#4E5D78'};
  position: absolute;
  bottom: 0;
`;
