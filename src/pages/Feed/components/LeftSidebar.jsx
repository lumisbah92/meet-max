import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FeedBlack from '../../../Assests/images/feedImage/sidebarIcon/Feed-black.svg'
import Feed from '../../../Assests/images/feedImage/sidebarIcon/Feed.svg'
import Community from '../../../Assests/images/feedImage/sidebarIcon/Community.svg'
import Message from '../../../Assests/images/feedImage/sidebarIcon/Message.svg'
import Notification from '../../../Assests/images/feedImage/sidebarIcon/Notification.svg'
import Explore from '../../../Assests/images/feedImage/sidebarIcon/Explore.svg'
import User from '../../../Assests/images/feedImage/sidebarIcon/User.svg'
import Setting from '../../../Assests/images/feedImage/sidebarIcon/Setting.svg'
import LogOut from '../../../Assests/images/feedImage/sidebarIcon/LogOut.svg'
import IconButton from '../../../components/Buttons/IconButton';
import BottomBarIconButton from '../../../components/Buttons/BottomBarIconButton';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoint from '../../../Assests/constants/breakpoint';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const windowSize = useWindowSize();
    const isPhone = windowSize.width <= Breakpoint.phone;

    const handleLogoutClick = () => {
      navigate('/login'); 
    };
  return (
    <>
        {!isPhone && <WideScreen>
            <IconButton
                iconSrc={Feed} text="Feed"
                bgColor="#4E5D78" textColor="white" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={700}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={Community} text="My community"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={Message} text="Messages"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={Notification} text="Notification"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={Explore} text="Explore"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={User} text="Profile"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={Setting} text="Settings"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={() => {}}
            />
            <IconButton
                iconSrc={LogOut} text="Logout"
                bgColor="white" textColor="#4E5D78" btnWidth="200px" btnHeight="46px"
                padding="10px 20px" borderRadius="10px" fontSize="16px" fontWeight={500}
                iconWidth="16px" iconHeight="16px" marginRight="20px"
                onClick={handleLogoutClick}
            />
        </WideScreen>}
        {isPhone && <PhoneScreen>
            <BottomBarIconButton iconSrc={FeedBlack} text="Feed" isSelected={true} onClick={() => {}}/>
            <BottomBarIconButton iconSrc={Community} text="My community" isSelected={false} onClick={() => {}}/>
            <BottomBarIconButton iconSrc={Explore} text="Explore" isSelected={false} onClick={() => {}}/>
            <BottomBarIconButton iconSrc={Notification} text="Notification" isSelected={false} onClick={() => {}}/>
            <BottomBarIconButton iconSrc={Setting} text="Settings" isSelected={false} onClick={() => {}}/>
        </PhoneScreen>}
    </>
  );
};

export default LeftSidebar;

// Define styled components for the page
const WideScreen = styled.div`
  background-color: white;

  min-width: 240px;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: start;
  align-items: start;
`;

const PhoneScreen = styled.div`
  background-color: white;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 56px;
  padding: 10px 10px 2px 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: space-between;
  align-items: center;
`;


