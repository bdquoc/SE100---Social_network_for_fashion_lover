// 

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage'
import SideBar from './components/sideBar/SideBar';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material';
import ExplorePage from './pages/explore/ExplorePage';
import ExploreForm from './components/explore/ExploreForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/explore" element={<ExplorePage/>}/>
      <Route path="/exploreform" element={<ExploreForm/>}/>

      {/* <Route path="/sidebarright" element={<SideBar_Right/>}/> */}
      <Route path="/message" element={<SideBar/>} />
    </Routes>
    </ThemeProvider>
    
  );
};

export default App;
