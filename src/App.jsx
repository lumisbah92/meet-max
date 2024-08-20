import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import Feed from './pages/Feed';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/feed" element={<ProtectedRoute element={<Feed />} />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// Define your theme
const theme = {
    primaryColor: '##377DFF',
    secondaryColor: '##38CB89',
};
