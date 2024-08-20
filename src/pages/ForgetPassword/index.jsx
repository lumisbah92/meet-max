import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthHeader from '../../components/AuthHeader';
import Text from '../../components/Text';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import COLOR from '../../Assests/constants/color';
import Mail from '../../Assests/images/Mail-@.svg'
import angleLeft from '../../Assests/images/Angle-Left-Blue.svg'
import Breakpoint from '../../Assests/constants/breakpoint';
import useWindowSize from '../../hooks/useWindowSize';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;

  const handleSignInClick = () => {
    navigate('/login'); 
  };

  const handleSendClick = () => {
    navigate('/login'); 
  };


  return (
    <Wrapper>
      <AuthHeader/>
      <Body>
        <Title>
            <Text fontSize={isPhone ? "18px" : "30px"} fontWeight={isPhone ? 700 : 900} lineHeight={isPhone ? "28px" : "46px"}>Forgot password?</Text>
            <Text fontSize={isPhone ? "14px" : "16px"} fontWeight={700} lineHeight={isPhone ? "22px" : "24px"}>Enter your details to receive a rest link</Text>
        </Title>
        <Form>
          <TextField
            iconSrc={Mail} placeholder="Your Email"
            width="100%" height={isPhone ? "40px" : "52px"} borderRadius="10px"
            iconWidth="16px" iconHeight="16px"
            fontWeight="700" fontSize="14px" lineHeight="22px"
            placeholderFontWeight="700" placeholderFontSize="14px"
            inputType="email"
          />
          <Button btnWidth="100%" btnHeight={isPhone ? "40px" : "52px"} fontSize={isPhone ? "14px" : "16px"}onClick={handleSignInClick}>Send</Button>
          <Row onClick={handleSendClick} style={{cursor: 'pointer'}}>
            <Icon src={angleLeft}/>
            <Text fontSize={isPhone ? "12px" : "16px"} lineHeight={isPhone ? "18px" : "24px"} fontWeight="700"  color={COLOR.primaryColor}>Back to Sign In</Text>
          </Row>
        </Form>
      </Body>
    </Wrapper>
  );
};

export default ForgetPassword;

// Define styled components for the page
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: start;
  align-items: center;

  padding: 30px;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;
`;

const Body = styled.div`
  width: 580px;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 20px;
  box-sizing: border-box;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    overflow-wrap: break-word;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 10px;
  height: 10px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`