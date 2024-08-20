import React from 'react';
import styled from 'styled-components';
import LogoImg from '../Assests/images/Logo.svg'
import Image from './Image';
import Text from './Text';
import LanguageDropdown from './LanguageDropDown';
import useWindowSize from '../hooks/useWindowSize';
import Breakpoint from '../Assests/constants/breakpoint';

const AuthHeader = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;

  return (
    <Wrapper>
      <LogoAndName>
        <Image width={isPhone ? "16px" : "26px"} height={isPhone ? "16px" : "26px"} src={LogoImg} />
        <Text fontSize={isPhone ? "12px" : "18px"} fontWeight="700" lineHeight={isPhone ? "18px" : "28px"}>Meetmax</Text>
      </LogoAndName>
      <LanguageDropdown/>
    </Wrapper>
  );
};

export default AuthHeader;

// Define styled components for the page
const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoAndName = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: start;
`
