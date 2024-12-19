import React from 'react';
import { Box, Typography, List, ListItem, Avatar } from '@mui/material';

const RightSidebar: React.FC = () => {
    return (
        <Box>
            {/* Recent Chats */}
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Recent Chats
            </Typography>
            <List>
                {['Julia Clarke', 'Sara Ciene', 'Amy Ruth'].map((name, index) => (
                    <ListItem key={index} sx={{ marginBottom: '10px' }}>
                        <Avatar sx={{ marginRight: '10px' }}>{name[0]}</Avatar>
                        <Typography>{name}</Typography>
                    </ListItem>
                ))}
            </List>

            {/* Suggestions */}
            <Typography variant="h6" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                You might like
            </Typography>
            <List>
                {['Gucci', 'Prada', 'Louis Vuitton'].map((brand, index) => (
                    <ListItem key={index} sx={{ marginBottom: '10px' }}>
                        <Typography>{brand}</Typography>
                    </ListItem>
                ))}
            </List>

            {/* Events */}
            <Typography variant="h6" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Upcoming Events
            </Typography>
            <List>
                {['Milan Fashion Week', 'London Fashion Week'].map((event, index) => (
                    <ListItem key={index} sx={{ marginBottom: '10px' }}>
                        <Typography>{event}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default RightSidebar;
