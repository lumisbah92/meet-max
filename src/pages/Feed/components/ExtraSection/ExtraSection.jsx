import React from 'react';
import styled from 'styled-components';
import YouMightLike from './YouMightLike'
import RecentEvent from './RecentEvent';
import Birthdays from './Birthdays';

const ExtraSection = () => {
  return (
    <Wrapper>
      <YouMightLike/>
      <RecentEvent/>
      <Birthdays/>
    </Wrapper>
  );
};

export default ExtraSection;

// Define styled components for the page
const Wrapper = styled.div`
  min-width: 340px;
  height: 100%;
  padding: 30px 20px 90px 20px;
  box-sizing: border-box;

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


