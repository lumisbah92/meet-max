import React from 'react';
import styled from 'styled-components';
import Story from './Story';
import CreatePost from './PostSection/CreatePost';
import Post from './PostSection/Post';
import RecentEvent from './ExtraSection/RecentEvent';
import Birthdays from './ExtraSection/Birthdays';

const PhoneBody = () => {
  return (
    <Wrapper>
        <Story/>
        <CreatePost/>
        <Post/>
        <RecentEvent/>
        <Post/>
        <Birthdays/>
    </Wrapper>
  );
};

export default PhoneBody;

// Define styled components for the page
const Wrapper = styled.div`
  background-color: #4E5D780D;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: start;

  padding: 10px 0px 130px 0px;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;
`;