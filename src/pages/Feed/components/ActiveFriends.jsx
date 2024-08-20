import React from 'react';
import styled from 'styled-components';
import Image from '../../../components/Image';
import Text from '../../../components/Text';
import ThreeDot from '../../../Assests/images/three-dot.svg'
import Saleh from '../../../Assests/images/feedImage/avater/profile-image.svg'

const ActiveFriends = () => {
  return (
    <Wrapper>
        <Row>
            <Text fontSize="16px" fontWeight="700" lineHeight="24px">Friends</Text>
            <Image width="16px" height="16px" src={ThreeDot}/>
        </Row>
        {Array.from({ length: 20 }).map((_, index) => (
            <Row>
                <Row width="100px">
                    <Image width="40px" height="40px" src={Saleh} borderRadius="50%"/>
                    <Text fontSize="16px" fontWeight="700" lineHeight="24px">Kayleigh Bysouth</Text>
                </Row>
                <Text fontSize="12px" fontWeight="500" lineHeight="18px" color="#4E5D7899">2 min</Text>
            </Row>
        ))}
    </Wrapper>
  );
};

export default ActiveFriends;

// Define styled components for the page
const Wrapper = styled.div`
  min-width: 260px;
  height: 100%;

  padding: 0px 10px 90px 0px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: start;
  align-items: start;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
      width: 12px;
  }

  &::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
      background-color: #888; 
      border-radius: 6px;
      border: 3px solid #f1f1f1;
  }
`;

const Row = styled.div`
  min-width: ${(props) => props.width || "260px"};

  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;
`

