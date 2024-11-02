import React from 'react'
import { Box, Avatar, Typography, Link, IconButton } from '@mui/material'
import { HomeOutlined, WindowOutlined, PeopleOutline, TagOutlined, SendOutlined, ExitToAppOutlined } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'

const SideBar = () => {

  const location = useLocation()

  const isActive = (path: string) => location.pathname.split("/")[1] === path;
  console.log(location.pathname.split("/")[1])
  return (

    <Box
      component="div"
      id="wrapperSideBar"
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignContent="center"
      
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "2px 0px 10px -5px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Box
        component="div"
        id="mainSideBar"
        width="80%"
        height="80%"
        marginTop="10%"
      >
        <Box
          component="div"
          id="avatar"
          height="150px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignContent="center"

        >
          <Avatar
            src="https://scontent.fsgn7-2.fna.fbcdn.net/v/t39.30808-6/451270082_1185848232626306_1812262998793060985_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHdJebdYHUi0wsO5KaqLPeU2uvA1eVodLva68DV5Wh0u94hVLxba4_kQMK5Mhgj0BuGsXqmAtmjjHRGmA1p5JGn&_nc_ohc=q0p9WSRhUrUQ7kNvgGSGGBx&_nc_zt=23&_nc_ht=scontent.fsgn7-2.fna&_nc_gid=A6KqNieAJtOHlN67VOrv1CS&oh=00_AYATeOaE9SJI644cDiPjeAfhQHsUuVr5wHMrQ3srQkRNJQ&oe=671FFDE8"
            sx={{
              height: "100%",
              width: "150px"
            }}
          />
        </Box>
        <Typography
          component="div"
          id="name"
          variant="h5"
          align="center"
          fontFamily="Inter"
          color="#A1A7B3"
          marginTop="10px"
        >
          Bao Nguyen

        </Typography>
        <Typography
          component="div"
          id="shortName"
          variant="body1"
          align="center"
          fontFamily="Inter"
          color="#A1A7B3"
        >
          @Bao.nguyen

        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          width={250}
          //bgcolor="white"
          padding={2}
        >

          <Link href="/home" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="home" height="40px" padding="10px" borderRadius="10px" bgcolor={isActive("home") ? "#CBD9C4" : "#ffffff"}>
              <HomeOutlined sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Home</Typography>

            </Box>
          </Link>

          <Link href="/explore" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="explore" height="40px" padding="10px" borderRadius="10px" bgcolor={isActive("explore") ? "#CBD9C4" : "#ffffff"}>
              <WindowOutlined sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Explore</Typography>

            </Box>
          </Link>


          <Link href="/message" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="group" height="40px" padding="10px" borderRadius="10px" bgcolor={isActive("group") ? "#CBD9C4" : "#ffffff"}>
              <PeopleOutline sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Group</Typography>

            </Box>
          </Link>


          <Link href="/favourite" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="favorite" height="40px" padding="10px" borderRadius="10px" bgcolor={isActive("favourite") ? "#CBD9C4" : "#ffffff"}>
              <TagOutlined sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Favourite</Typography>

            </Box>
          </Link>


          <Link href="/message" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="message" height="40px" padding="10px" borderRadius="10px" bgcolor={isActive("message") ? "#CBD9C4" : "#ffffff"}>
              <SendOutlined sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Message</Typography>

            </Box>
          </Link>


          <Box flexGrow={2} />

          {/* Item sticking to the bottom */}

          <Link href="/login" underline="none">
            <Box display="flex" alignItems="center" gap={1} id="logOut" height="40px" padding="10px" borderRadius="10px">
              <ExitToAppOutlined sx={{ color: "#89966B" }} />
              <Typography fontFamily="Inter" color='#89966B' fontWeight="500">Log out</Typography>

            </Box>
          </Link>

        </Box>

      </Box>
    </Box>


  )
}

export default SideBar