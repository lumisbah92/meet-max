import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import PostSection from './components/PostSection/PostSection';
import ExtraSection from './components/ExtraSection/ExtraSection';
import Breakpoint from '../../Assests/constants/breakpoint';
import useWindowSize from '../../hooks/useWindowSize';
import PhoneBody from './components/PhoneBody';

const Feed = () => {
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  return (
    <Wrapper>
      <Header/>
      <Body>
        <LeftSidebar/>
        {!isPhone ? <Container>
            <PostSection/>
            <ExtraSection/>
        </Container> : null}
        {!isPhone ? <RightSidebar/> : null}
        {isPhone ? <PhoneBody/> : null}
      </Body>
    </Wrapper>
  );
};

export default Feed;

// Define styled components for the page
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  overflow: hidden;
`;
const Body = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  background-color: #4E5D780D;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;

  border-radius: 16px;
`;