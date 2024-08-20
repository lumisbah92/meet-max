import React from 'react';
import styled from 'styled-components';
import CreatePost from './CreatePost';
import Post from './Post';

const PostSection = () => {
  return (
    <Wrapper>
        <CreatePost/>
        <Post/>
        <Post/>
    </Wrapper>
  );
};

export default PostSection;

// Define styled components for the page
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 20px 90px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
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


