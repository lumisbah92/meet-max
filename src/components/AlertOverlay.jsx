import React from 'react';
import styled from 'styled-components';
import Button from './Buttons/Button';
import COLOR from '../Assests/constants/color';

const AlertOverlay = ({ title, message, primaryActionTitle, onPrimaryButtonClicked, onCloseClicked }) => {

    return (
        <Overlay>
            <Wrapper>
                <h1>{title}</h1>
                <h4 dangerouslySetInnerHTML={{ __html: message }} />
                <Button btnWidth="90px" btnHeight="40px" fontSize={"18px"} onClick={onPrimaryButtonClicked}>{primaryActionTitle}</Button>
            </Wrapper>
        </Overlay>
    );
};

export default AlertOverlay;

const Overlay = styled.div`
    background-color: #06182CC0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: space-around;
    z-index: 100;
`;

const Wrapper = styled.div`
    position: fixed;
    width: 390px;
    height: auto;
    background-color: #F9F9F9;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    box-sizing: border-box;

    color: ${COLOR.textColor}

    @media (max-width: 768px) {
        width: 90vw; 
        max-width: 375px; 
    }
`;
