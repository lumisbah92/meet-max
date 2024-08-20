import React from 'react';
import styled from 'styled-components';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';
import Button from '../../../../components/Buttons/Button';
import Saleh from '../../../../Assests/images/feedImage/avater/profile-image.svg'
import Explore from '../../../../Assests/images/Explore.svg'
import Faceook from '../../../../Assests/images/Faceook.svg'
import Twitter from '../../../../Assests/images/Twitter.svg'
import Instagram from '../../../../Assests/images/Instagram.svg'
import COLOR from '../../../../Assests/constants/color';

const YouMightLike = () => {
  return (
    <Wrapper>
        <Row>
            <Text fontSize="16px" fontWeight="700" lineHeight="24px">You Might Like</Text>
            <Text fontSize="13px" fontWeight="500" lineHeight="18px" color={COLOR.primaryColor}>See All</Text>
        </Row>
        <Line/>
        <Row alignItems="start" gap="20px">
            <Image width="50px" height="50px" src={Saleh} borderRadius="50%"/>
            <Column>
                <Text fontSize="16px" fontWeight="700" lineHeight="24px">Radovan SkillArena</Text>
                <Text fontSize="12px" fontWeight="500" lineHeight="18px">Founder & CEO at Trophy</Text>
                <SecondaryRow style={{paddingTop: "10px"}}>
                    <Image width="14px" height="14px" src={Explore}/>
                    <Image width="14px" height="14px" src={Faceook}/>
                    <Image width="14px" height="12px" src={Twitter}/>
                    <Image width="14px" height="14px" src={Instagram}/>
                </SecondaryRow>
            </Column>
        </Row>
        <Row>
            <Button btnWidth="116px" btnHeight="36px" fontSize="16px" fontWeight={700} border={"1px solid #4E5D7833"}
                borderRadius="6px" bgColor='#FFFFFF' hoverBgColor="#f2f2f2" textColor="#4E5D7899" onClick={() => {}}
            >
                Ignore
            </Button>
            <Button btnWidth="116px" btnHeight="36px" fontSize="16px" borderRadius="8px" onClick={() => {}}>Follow</Button>
        </Row>
    </Wrapper>
  );
};

export default YouMightLike;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;

  min-width: 288px;
  min-height: 220px;
  padding: 20px 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Row = styled.div`
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: space-between;
  align-items: ${(props) => props.alignItems || "center"};;
`

const SecondaryRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: start;
  align-items: center;
`

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap || "5px"};
  justify-content: center;
  align-items: start;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5D7833;
`;

