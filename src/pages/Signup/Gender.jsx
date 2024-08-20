import React, { useState } from 'react';
import styled from 'styled-components';
import male from '../../Assests/images/male.svg'
import female from '../../Assests/images/Female.svg'
import RadioButton from '../../components/Buttons/RadioButton';
import Breakpoint from '../../Assests/constants/breakpoint';
import useWindowSize from '../../hooks/useWindowSize';

const Gender = ({onSelection}) => {
    const [selectedValue, setSelectedValue] = useState("Male");

    const windowSize = useWindowSize();
    const isPhone = windowSize.width <= Breakpoint.phone;

    return (
      <Wrapper>
        <Icon src={selectedValue === "Male" ? male : female}/>
        <RadioButton
        id="radio1"
        name="Male"
        value="Male"
        checked={selectedValue === 'Male'}
        onChange={() => { setSelectedValue("Male"); onSelection("Male")}}
        label="Male"
        size="16px"
        color="#377DFF"
        fontSize={isPhone ? "14px" : "16px"}
      />
      <RadioButton
        id="radio2"
        name="Female"
        value="Female"
        checked={selectedValue === 'Female'}
        onChange={() => { setSelectedValue("Female"); onSelection("Female")}}
        label="Female"
        size="16px"
        color="#377DFF"
        fontSize={isPhone ? "14px" : "16px"}
      />
      </Wrapper>
    );
};

export default Gender;

const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid #4E5D7833;
  border-radius: 10px;

  display: flex;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;

  @media (width <= ${Breakpoint.phone}px) {
    height: 40px;
  }
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;