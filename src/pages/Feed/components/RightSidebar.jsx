import React from 'react';
import styled from 'styled-components';
import search from '../../../Assests/images/Search.svg'
import TextField from '../../../components/TextField';
import Story from "../components/Story"
import ActiveFriends from './ActiveFriends';

const RightSidebar = () => {
  return (
    <Wrapper>
      <TextField
        iconSrc={search} placeholder="Search Friends!"
        width="270px" height="42px" borderRadius="10px"
        iconWidth="16px" iconHeight="16px"
        fontWeight="700" fontSize="14px" lineHeight="22px"
        placeholderFontWeight="400" placeholderFontSize="14px" placeholderColor={"#4E5D78CC"}
      />
      <Story/>
      <ActiveFriends/>
    </Wrapper>
  );
};

export default RightSidebar;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000005;

  width: 310px;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: start;
  align-items: start;
`;

