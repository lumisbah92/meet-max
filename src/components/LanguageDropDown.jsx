import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';
import Text from './Text';
import AngleDown from '../Assests/images/Angle-down.svg'
import useWindowSize from '../hooks/useWindowSize';
import Breakpoint from '../Assests/constants/breakpoint';

const languages = [
  "English (UK)",
  "English (US)",
  "Bengali (BN)",
  "Hindi (IN)",
  // Add more languages as needed
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;


  const handleSelect = (language) => {
    setSelectedLanguage(language);
    console.log(`Selected language: ${language}`);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpenDropDown((val) => !val)}>
        <Text fontSize={isPhone ? "10px" : "14px"} fontWeight="700" lineHeight={isPhone ? "16px" : "22px"} color="#4E5D7899">{selectedLanguage}</Text>
        <Image width={isPhone ? "12px" : "16px"} height={isPhone ? "12px" : "16px"} src={AngleDown} />
      </DropdownButton>
      {isOpenDropDown && <DropdownMenu>
        {languages.map((language, index) => (
          <DropdownItem key={index} onClick={() => {handleSelect(language); setIsOpenDropDown(false)}}>
            <Text fontSize={isPhone ? "10px" : "14px"} fontWeight="700" lineHeight={isPhone ? "16px" : "22px"} color="#4E5D7899">{language}</Text>
          </DropdownItem>
        ))}
      </DropdownMenu>}
    </DropdownContainer>
  );
};

export default LanguageDropdown;


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  min-width: 154px;
  height: 38px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;

  border-radius: 4px;

  background-clor: #4E5D7800;
  box-shadow: 0px 4px 8px 0px #0000000A;

  @media (width <= ${Breakpoint.phone}px) {
    min-width: 95px;
    height: 24px;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;