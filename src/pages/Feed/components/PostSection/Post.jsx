import React from 'react';
import styled from 'styled-components';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';
import TextField from '../../../../components/TextField';
import Saleh from '../../../../Assests/images/feedImage/avater/profile-image.svg'
import ThreeDot from '../../../../Assests/images/three-dot.svg'
import postImage1 from '../../../../Assests/images/feedImage/postImage/post-image-1.svg'
import love from '../../../../Assests/images/feedImage/postImage/love.svg'
import comment from '../../../../Assests/images/feedImage/postImage/comment.svg'
import share from '../../../../Assests/images/feedImage/postImage/share.svg'
import Send from '../../../../Assests/images/feedImage/postImage/Send.svg'
import COLOR from '../../../../Assests/constants/color'
import Breakpoint from '../../../../Assests/constants/breakpoint';
import useWindowSize from '../../../../hooks/useWindowSize';

const Post = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  return (
    <Wrapper>
        <Row>
            <SecondaryRow>
                <Image width={isPhone ? "32px" : "50px"} height={isPhone ? "32px" : "50px"} src={Saleh} borderRadius="50%"/>
                <Column gap="0px">
                    <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="700" lineHeight={isPhone ? "22px" : "24px"}>Sepural Gallery</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="18px">15h. Public</Text>
                </Column>
            </SecondaryRow>
            <Image width="16px" height="16px" src={ThreeDot}/>
        </Row>
        <Image style={{objectFit: 'cover', borderRadius: `${isPhone ? "6px" : "16px"}`}} width="100%" height={isPhone ? "185px" : "400px"} src={postImage1}/>
        <Row>
            <Image width={isPhone ? "18px" : "20px"} height={isPhone ? "18px" : "20px"} src={Saleh} borderRadius="50%"/>
            <SecondaryRow>
                <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="500" lineHeight={isPhone ? "22px" : "24px"} color='#4E5D7899'>3 Comments</Text>
                <Text fontSize={isPhone ? "14px" : "16px"} fontWeight="500" lineHeight={isPhone ? "22px" : "24px"} color='#4E5D7899'>17 Share</Text>
            </SecondaryRow>
        </Row>
        <Column gap="5px">
            <Line/>
            <Row>
                <SecondaryRow>
                    <Image width="16px" height="16px" src={love}/>
                    <Text fontSize={isPhone ? "14px" : "12px"} fontWeight="700" lineHeight={isPhone ? "22px" : "18px"} color={COLOR.primaryColor}>Like</Text>
                </SecondaryRow>
                <SecondaryRow>
                    <Image width="16px" height="16px" src={comment}/>
                    <Text fontSize={isPhone ? "14px" : "12px"} fontWeight="700" lineHeight={isPhone ? "22px" : "18px"}>Comments</Text>
                </SecondaryRow>
                <SecondaryRow>
                    <Image width="16px" height="16px" src={share}/>
                    <Text fontSize={isPhone ? "14px" : "12px"} fontWeight="700" lineHeight={isPhone ? "22px" : "18px"}>Share</Text>
                </SecondaryRow>
            </Row>
            <Line/>
        </Column>
        <Row gap="20px">
            <Image width={isPhone ? "32px" : "42px"} height={isPhone ? "32px" : "42px"} src={Saleh} borderRadius="50%"/>
            <TextField
                placeholder="Write a comment..."
                width="100%" height={isPhone ? "34px" : "42px"} borderRadius={isPhone ? "6px" : "10px"}
                fontWeight="700" fontSize={isPhone ? "12px" : "14px"} lineHeight={isPhone ? "18px" : "22px"}
                placeholderFontWeight="400" placeholderFontSize={isPhone ? "12px" : "14px"} placeholderColor={"#4E5D78CC"}
                haveIcon={false} bgColor={"#4E5D780D"}
            />
            <SendIcon>
              <Image width="16px" height="16px" src={Send}/>
            </SendIcon>
        </Row>
    </Wrapper>
  );
};

export default Post;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;

  width: 100%;
  min-height: 680px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: start;
  align-items: start;

  @media (width <= ${Breakpoint.phone}px) {
    min-height: 381px;
    padding: 13px;
    box-sizing: border-box;
    border-radius: 0px;
    row-gap: 10px;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: space-between;
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

const SecondaryRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: start;
  align-items: center;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5D7833;
`;

const SendIcon = styled.div`
  min-width: 38px;
  height: 38px;
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
