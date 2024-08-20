import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../Assests/images/Logo.svg'
import search from '../../../Assests/images/Search.svg'
import Image from '../../../components/Image';
import Text from '../../../components/Text';
import TextField from '../../../components/TextField';
import ProfileImage from '../../../Assests/images/feedImage/avater/profile-image.svg';
import message from '../../../Assests/images/phoneIcon/Message.svg';
import useWindowSize from '../../../hooks/useWindowSize'
import Breakpoint from '../../../Assests/constants/breakpoint'

const Header = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;

  return (
    <>
      {!isPhone && <WideScreen>
        <LogoAndSearch>
          <LogoAndName>
              <Image width="26px" height="26px" src={LogoImg} />
              <Text fontSize="18px" fontWeight="700" lineHeight="28px">Meetmax</Text>
          </LogoAndName>
          <TextField
              iconSrc={search} placeholder="Search for something here..."
              width="542px" height="42px" borderRadius="10px"
              iconWidth="16px" iconHeight="16px"
              fontWeight="700" fontSize="14px" lineHeight="22px"
              placeholderFontWeight="400" placeholderFontSize="14px" placeholderColor={"#4E5D78CC"}
          />
        </LogoAndSearch>
        <NameAndImage>
          <Text fontSize="16px" fontWeight="700" lineHeight="24px">Saleh Ahmed</Text>
          <Image width="42px" height="42px" borderRadius="10px" src={ProfileImage} />
        </NameAndImage>
      </WideScreen>}
      {isPhone && <PhoneScreen>
        <Image width="32px" height="32px" borderRadius="10px" src={ProfileImage} />
        <TextField
          iconSrc={search} placeholder="Search for something here..."
            width="100%" height="32px" borderRadius="6px"
            iconWidth="14px" iconHeight="14px"
            fontWeight="700" fontSize="12px" lineHeight="22px"
            placeholderFontWeight="400" placeholderFontSize="12px" placeholderColor={"#4E5D78CC"}
        />
        <Image width="16px" height="16px" src={message} />
      </PhoneScreen>}
    </>
  );
};

export default Header;

// Define styled components for the page
const WideScreen = styled.div`
  background-color: white;

  width: 100vw;
  min-height: 78px;
  padding: 0px 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoAndName = styled.div`
  width: 190px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: start;
`
const LogoAndSearch = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const NameAndImage = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const PhoneScreen = styled.div`
  background-color: white;

  width: 100%;
  min-height: 62px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;


