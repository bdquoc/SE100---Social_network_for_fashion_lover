import React from 'react';
import { Box, Grid } from '@mui/material';
import SideBar from '../../components/sideBar/SideBar';
import MainFeed from '../../components/home/MainFeed';
import RightSidebar from '../../components/home/RightSidebar';

const HomePage: React.FC = () => {
    return (
        <Grid container sx={{ height: '100vh' }}>
            {/* Sidebar */}
            <Grid item xs={2} sx={{ backgroundColor: '#f0f4f5' }}>
                <SideBar />
            </Grid>

            {/* Main Feed */}
            <Grid item xs={7} sx={{ padding: '20px', backgroundColor: '#ffffff' }}>
                <MainFeed />
            </Grid>

            {/* Right Sidebar */}
            <Grid item xs={3} sx={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
                <RightSidebar />
            </Grid>
        </Grid>
    );
};

export default HomePage;
