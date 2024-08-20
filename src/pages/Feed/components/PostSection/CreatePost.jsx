import React from 'react';
import styled from 'styled-components';
import TextField from '../../../../components/TextField';
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';
import Button from '../../../../components/Buttons/Button';
import Saleh from '../../../../Assests/images/feedImage/avater/profile-image.svg'
import Picture from '../../../../Assests/images/Picture.svg'
import Video from '../../../../Assests/images/Video.svg'
import Smile from '../../../../Assests/images/Smile.svg'
import Breakpoint from '../../../../Assests/constants/breakpoint';
import useWindowSize from '../../../../hooks/useWindowSize';

const CreatePost = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  return (
    <Wrapper>
        <Row gap="20px">
            <Image width={isPhone ? "32px" : "42px"} height={isPhone ? "32px" : "42px"} src={Saleh} borderRadius="50%"/>
            <TextField
                placeholder="What’s happening?"
                width="100%" height={isPhone ? "32px" : "42px"} borderRadius={isPhone ? "6px" : "10px"}
                fontWeight="700" fontSize={isPhone ? "12px" : "14px"} lineHeight={isPhone ? "18px" : "22px"}
                placeholderFontWeight="400" placeholderFontSize={isPhone ? "12px" : "14px"} placeholderColor={"#4E5D78CC"}
                haveIcon={false} bgColor={"#4E5D780D"}
            />
        </Row>
        <Row>
            <AttachmentRow gap="25px">
                <AttachmentRow style={{cursor: 'pointer'}}>
                    <Image width="16px" height="16px" src={Video}/>
                    <Text fontSize={isPhone ? "12px" : "14px"} fontWeight="700" lineHeight={isPhone ? "18px" : "22px"}>{isPhone ? "Live" : "Live Video"}</Text>
                </AttachmentRow>
                <AttachmentRow style={{cursor: 'pointer'}}>
                    <Image width="16px" height="16px" src={Picture}/>
                    <Text fontSize={isPhone ? "12px" : "14px"} fontWeight="700" lineHeight={isPhone ? "18px" : "22px"}>{isPhone ? "Photo" : "Photo/Video"}</Text>
                </AttachmentRow>
                <AttachmentRow style={{cursor: 'pointer'}}>
                    <Image width="16px" height="16px" src={Smile}/>
                    <Text fontSize={isPhone ? "12px" : "14px"} fontWeight="700" lineHeight={isPhone ? "18px" : "22px"}>Feeling</Text>
                </AttachmentRow>
            </AttachmentRow>
            <Button btnWidth={isPhone ? "58px" : "92px"} btnHeight={isPhone ? "30px" : "40px"} fontSize={isPhone ? "14px" : "16px"} onClick={() => {}}>Post</Button>
        </Row>
    </Wrapper>
  );
};

export default CreatePost;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  border-radius: 16px;

  width: 100%;
  min-height: 136px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (width <= ${Breakpoint.phone}px) {
    min-height: 102px;
    padding: 15px;
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

const AttachmentRow = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.gap || "10px"};
  justify-content: flex-start;
  align-items: center;
`


