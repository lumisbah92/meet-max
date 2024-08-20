import React from 'react';
import styled from 'styled-components';
import Image from '../../../components/Image';
import Text from '../../../components/Text';
import Saleh from '../../../Assests/images/feedImage/storyAvater/Saleh.svg'
import Edilson from '../../../Assests/images/feedImage/storyAvater/Edilson.svg'
import Afrim from '../../../Assests/images/feedImage/storyAvater/Afrim.svg'
import Eduardo from '../../../Assests/images/feedImage/storyAvater/Eduardo.svg'
import Breakpoint from '../../../Assests/constants/breakpoint';

const Story = () => {
  return (
    <Wrapper>
      <Column>
        <Image width="50px" height="50px" src={Saleh} borderRadius="50%"/>
        <Text fontSize="14px" fontWeight="500" lineHeight="22px">Saleh</Text>
      </Column>
      <Column>
        <Image width="50px" height="50px" src={Edilson} borderRadius="50%"/>
        <Text fontSize="14px" fontWeight="500" lineHeight="22px">Edilson</Text>
      </Column>
      <Column>
        <Image width="50px" height="50px" src={Afrim} borderRadius="50%"/>
        <Text fontSize="14px" fontWeight="500" lineHeight="22px">Afrim</Text>
      </Column>
      <Column>
        <Image width="50px" height="50px" src={Eduardo} borderRadius="50%"/>
        <Text fontSize="14px" fontWeight="500" lineHeight="22px">Eduardo</Text>
      </Column>
    </Wrapper>
  );
};

export default Story;

// Define styled components for the page
const Wrapper = styled.div`
  width: 269px;
  height: 82px;

  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: start;
  align-items: center;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    min-height: 110px;
    background-color: white;

    padding: 0px 20px;
    box-sizing: border-box;
  }
`;

const Column = styled.div`
  width: 50px;
  height: 82px;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
`

