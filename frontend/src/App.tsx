// 

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/auth/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import MessagePage from './pages/message/MessagePage';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />


        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </ThemeProvider>

  );
};

export default App;
