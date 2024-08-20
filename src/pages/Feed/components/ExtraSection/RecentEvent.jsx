import React from 'react';
import styled from 'styled-components';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';
import ThreeDot from '../../../../Assests/images/three-dot.svg'
import Book from '../../../../Assests/images/book.svg'
import Bag from '../../../../Assests/images/bag.svg'
import Saleh from '../../../../Assests/images/feedImage/avater/profile-image.svg'
import useWindowSize from '../../../../hooks/useWindowSize';
import Breakpoint from '../../../../Assests/constants/breakpoint';

const RecentEvent = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  return (
    <Wrapper>
        <Row>
            <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Recent Event</Text>
            <Image width="16px" height="16px" src={ThreeDot}/>
        </Row>
        <Line/>
        <Event>
            <Row alignItems="start" padding="0px" gap="20px">
                <Image width={isPhone ? "45px" : "40px"} height={isPhone ? "45px" : "40px"} src={Book}/>
                <Column>
                    <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Graduation Ceremony</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="18px">The graduation ceremony is also sometimes called...</Text>
                </Column>
            </Row>
            <Line/>
            <Row padding="0px">
                <Text fontSize="12px" fontWeight="700" lineHeight="18px">8 seen</Text>
                <Image width={isPhone ? "18px" : "22px"} height={isPhone ? "18px" : "22px"} src={Saleh} borderRadius="50%"/>
            </Row>
        </Event>
        <Event>
            <Row alignItems="start" padding="0px" gap="20px">
                <Image width={isPhone ? "45px" : "40px"} height={isPhone ? "45px" : "40px"} src={Bag}/>
                <Column>
                    <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Photography Ideas</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="18px">Reflections. Reflections work because they can create...</Text>
                </Column>
            </Row>
            <Line/>
            <Row padding="0px">
                <Text fontSize="12px" fontWeight="700" lineHeight="18px">11 seen</Text>
                <Image width={isPhone ? "18px" : "22px"} height={isPhone ? "18px" : "22px"} src={Saleh} borderRadius="50%"/>
            </Row>
        </Event>
    </Wrapper>
  );
};

export default RecentEvent;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;

  min-width: 288px;
  min-height: 348px;
  padding: 20px 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    min-height: 359px;
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
  height: 124px;
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
    min-height: 137px;
    margin: 0px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
  }
`

