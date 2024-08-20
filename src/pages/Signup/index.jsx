import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import AuthHeader from '../../components/AuthHeader';
import Text from '../../components/Text';
import IconButton from '../../components/Buttons/IconButton';
import TextField from '../../components/TextField';
import Button from '../../components/Buttons/Button';
import Google from '../../Assests/images/Google.svg';
import Apple from '../../Assests/images/Apple.svg';
import Mail from '../../Assests/images/Mail-@.svg';
import Smile from '../../Assests/images/Smile.svg';
import Lock from '../../Assests/images/Lock.svg';
import Calender from '../../Assests/images/Calendar.svg';
import Gender from './Gender';
import COLOR from '../../Assests/constants/color';
import Breakpoint from '../../Assests/constants/breakpoint';
import useWindowSize from '../../hooks/useWindowSize';
import { signUpUser } from '../../features/auth/authSlice';
import AlertOverlay from '../../components/AlertOverlay';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const isPhone = windowSize.width <= Breakpoint.phone;
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    dob: '',
    gender: 'Male',
  });
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    name: yup.string().required('Name is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    dob: yup.string().required('Date of birth is required'),
    gender: yup.string().required('Gender is required'),
  });

  const validateForm = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSignUpClick = async () => {
    const isValid = await validateForm();
    if (isValid) {
      try {
        await dispatch(signUpUser(formData)).unwrap();
        navigate('/login');
      } catch (err) {
        console.error("SignUp failed:", err);
      }
    }
  };
  

  const handleSignInClick = () => {
    navigate('/login');
  };


  const errorMessage = Object.values(errors)
  .map(error => error + '!')
  .join('<br/>');

  return (
    <Wrapper>
      <AuthHeader />
      <Body>
      {errorMessage && (
          <AlertOverlay
            title="Error"
            message={errorMessage}
            primaryActionTitle="OK"
            onPrimaryButtonClicked={() => setErrors({})}
          />
        )}
        <Title>
          <Text fontSize={isPhone ? "18px" : "30px"} fontWeight={isPhone ? 700 : 900} lineHeight={isPhone ? "28px" : "46px"}>Getting Started</Text>
          <Text fontSize={isPhone ? "14px" : "16px"} fontWeight={700} lineHeight={isPhone ? "22px" : "24px"}>Create an account to continue and connect with the people.</Text>
        </Title>
        <Form>
          <Row>
            <IconButton
              iconSrc={Google} text="Log in with Google"
              bgColor="#4E5D780D" textColor="#4E5D78" btnWidth="100%" btnHeight={isPhone ? "38px" : "52px"}
              fontSize={isPhone ? "12px" : "16px"} padding={isPhone ? "5px" : "10px 30px"}
              marginRight={isPhone ? "5px" : "20px"} borderRadius="10px" iconWidth="16px" iconHeight="16px"
              onClick={() => {}}
            />
            <IconButton
              iconSrc={Apple} text="Log in with Apple"
              bgColor="#4E5D780D" textColor="#4E5D78" btnWidth="100%" btnHeight={isPhone ? "38px" : "52px"}
              fontSize={isPhone ? "12px" : "16px"} padding={isPhone ? "5px" : "10px 30px"}
              marginRight={isPhone ? "5px" : "20px"} borderRadius="10px" iconWidth="16px" iconHeight="16px"
              onClick={() => {}}
            />
          </Row>
          <Row>
            <Line />
            <Text fontSize={isPhone ? "10px" : "18px"} fontWeight="700" lineHeight={isPhone ? "16px" : "28px"}>OR</Text>
            <Line />
          </Row>
          <TextField
            iconSrc={Mail} placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            width="100%" height={isPhone ? "40px" : "52px"} borderRadius="10px"
            iconWidth="16px" iconHeight="16px"
            fontWeight="700" fontSize="14px" lineHeight="22px"
            placeholderFontWeight="700" placeholderFontSize="14px"
          />
          <TextField
            iconSrc={Smile} placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            width="100%" height={isPhone ? "40px" : "52px"} borderRadius="10px"
            iconWidth="16px" iconHeight="16px"
            fontWeight="700" fontSize="14px" lineHeight="22px"
            placeholderFontWeight="700" placeholderFontSize="14px"
          />
          <TextField
            iconSrc={Lock} placeholder="Create Password"
            inputType="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            width="100%" height={isPhone ? "40px" : "52px"} borderRadius="10px"
            iconWidth="16px" iconHeight="16px"
            fontWeight="700" fontSize="14px" lineHeight="22px"
            placeholderFontWeight="700" placeholderFontSize="14px"
          />
          <DateAndGender>
            <TextField
              iconSrc={Calender} placeholder="Date of birth"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              width="100%" height={isPhone ? "40px" : "52px"} borderRadius="10px"
              iconWidth="16px" iconHeight="16px"
              fontWeight="700" fontSize="14px" lineHeight="22px"
              placeholderFontWeight="700" placeholderFontSize="14px"
            />
            <Gender onSelection={(gender) => setFormData({ ...formData, gender })} />
          </DateAndGender>
          <Button btnWidth="100%" btnHeight={isPhone ? "40px" : "52px"} fontSize={isPhone ? "14px" : "16px"} onClick={handleSignUpClick}>Sign Up</Button>
          <Row>
            <Text fontSize={isPhone ? "12px" : "16px"} fontWeight="700" lineHeight={isPhone ? "18px" : "24px"}>Already have an account?</Text>
            <Text fontSize={isPhone ? "12px" : "16px"} lineHeight={isPhone ? "18px" : "24px"} fontWeight="700" color={COLOR.primaryColor} style={{ cursor: 'pointer' }} onClick={handleSignInClick}>Sign In</Text>
          </Row>
        </Form>
      </Body>
    </Wrapper>
  );
};

export default SignUp;

// Define styled components for the page
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: start;
  align-items: center;

  padding: 30px;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;
`;

const Body = styled.div`
  width: 580px;

  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 20px;
  box-sizing: border-box;

  @media (width <= ${Breakpoint.phone}px) {
    width: 100%;
    overflow-wrap: break-word;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: center;
  align-items: center;

  @media (width <= ${Breakpoint.phone}px) {
    column-gap: 10px;
  }
`

const DateAndGender = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: center;
  align-items: center;

  @media (width <= ${Breakpoint.phone}px) {
    flex-direction: column;
    row-gap: 20px;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5D7833;
`;