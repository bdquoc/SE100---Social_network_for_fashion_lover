import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardMedia, Avatar } from '@mui/material';

const MainFeed: React.FC = () => {
    return (
        <Box>
            {/* Post Input */}
            <Box sx={{ marginBottom: '20px', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <Avatar
                    src="https://scontent.fsgn7-2.fna.fbcdn.net/v/t39.30808-6/451270082_1185848232626306_1812262998793060985_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHdJebdYHUi0wsO5KaqLPeU2uvA1eVodLva68DV5Wh0u94hVLxba4_kQMK5Mhgj0BuGsXqmAtmjjHRGmA1p5JGn&_nc_ohc=q0p9WSRhUrUQ7kNvgGSGGBx&_nc_zt=23&_nc_ht=scontent.fsgn7-2.fna&_nc_gid=A6KqNieAJtOHlN67VOrv1CS&oh=00_AYATeOaE9SJI644cDiPjeAfhQHsUuVr5wHMrQ3srQkRNJQ&oe=671FFDE8"
                    sx={{
                        height: "100%",
                        width: "100px"
                    }}
                />
                <TextField
                    fullWidth
                    placeholder="Share something..."
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                />
                <Button variant="contained" sx={{ marginRight: '10px' }}>
                    Live Video
                </Button>
                <Button variant="contained" sx={{ marginRight: '10px' }}>
                    Photos
                </Button>
                <Button variant="contained">Feeling</Button>
            </Box>

            {/* Posts */}
            <Card sx={{ marginBottom: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Avatar sx={{ marginRight: '10px' }}>A</Avatar>
                        <Typography variant="body1">Cristiano Ronaldo</Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        height="200"
                        image="C:\Users\Haistore.vn\Downloads\cr7.jpg"
                        alt="Post Image"
                    />
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">340 Likes</Typography>
                        <Typography variant="body2">13 Comments</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MainFeed;
