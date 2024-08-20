import React from 'react';
import styled from 'styled-components';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';
import TextField from '../../../../components/TextField';
import Brash from '../../../../Assests/images/Brash.svg'
import Send from '../../../../Assests/images/feedImage/postImage/Send.svg'
import Saleh from '../../../../Assests/images/feedImage/avater/profile-image.svg'
import COLOR from '../../../../Assests/constants/color';
import useWindowSize from '../../../../hooks/useWindowSize';
import Breakpoint from '../../../../Assests/constants/breakpoint';

const Birthdays = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  return (
    <Wrapper>
        <Row>
            <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Birthdays</Text>
            <Text fontSize="13px" fontWeight="500" lineHeight="18px" color={COLOR.primaryColor}>See All</Text>
        </Row>
        <Line/>
        <Column gap="8px">
            <Row gap="20px">
                <Image width={isPhone ? "45px" : "40px"} height={isPhone ? "45px" : "40px"} src={Saleh} borderRadius="6px"/>
                <Column gap="2px">
                    <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Edilson De Carvalho</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="18px">Birthday today</Text>
                </Column>
            </Row>
            <Row>
                <TextField
                    placeholder="Write on his inbox"
                    width="100%" height={isPhone ? "34px" : "30px"} borderRadius={isPhone ? "6px" : "10px"}
                    fontWeight="700" fontSize={isPhone ? "12px" : "14px"} lineHeight={isPhone ? "18px" : "22px"}
                    placeholderFontWeight="400" placeholderFontSize={isPhone ? "12px" : "14px"} placeholderColor={"#4E5D7899"}
                    haveIcon={false} bgColor={"#4E5D780D"} padding="10px"
                />
                <SendIcon>
                <Image width="16px" height="16px" src={Send}/>
                </SendIcon>
            </Row>
        </Column>
        <Event>
            <Row alignItems="start" padding="0px" gap="20px">
                <Image width={isPhone ? "45px" : "40px"} height={isPhone ? "45px" : "40px"} src={Brash}/>
                <Column>
                    <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Upcoming birthdays</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="18px">See 12 others have upcoming birthdays</Text>
                </Column>
            </Row>
        </Event>
    </Wrapper>
  );
};

export default Birthdays;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;

  min-width: 288px;
  min-height: 258px;
  padding: 20px 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    min-height: 251px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 0px;
    row-gap: 10px;
  }
`;

const Row = styled.div`
  width: 100%;
  padding: ${(props) => props.padding || "0px 20px"};
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: space-between;
  align-items: ${(props) => props.alignItems || "center"};

  @media (width <= ${Breakpoint.phone}px) {
    padding: 0px;
  }
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5D7833;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap || "5px"};
  justify-content: center;
  align-items: start;
`

const Event = styled.div`
  width: 252px;
  height: 78px;
  background-color: #4E5D7808;
  border-radius: 10px;

  margin: 0px 20px;
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap || "5px"};
  justify-content: space-between;
  align-items: start;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    min-height: 73px;
    margin: 0px;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 8px;
  }
`
const SendIcon = styled.div`
  min-width: 30px;
  height: 30px;
  background-color: rgba(55, 125, 255, 0.2);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (width <= ${Breakpoint.phone}px) {
    min-width: 34px;
    height: 34px;
  }
`

