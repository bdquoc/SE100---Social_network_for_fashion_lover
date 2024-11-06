import React from "react";
import clsx from "clsx";
import { Avatar, AvatarGroup, Button } from "@mui/material";

import FriendshipBar from "./FriendshipBar/FriendshipBar";
import SearchBar from "../../shared/SearchBar/SearchBar";
import style from "./SideBarHome.module.css";
const SideBarHome = () => {
  return (
    <div
      className={clsx(style.container)}
      style={{ position: "fixed", top: 0 }}
    >
      <SearchBar placeHolderString="Search for friend" />
      <div className={clsx(style.recent_chats_box)}>
        <h1 className={clsx(style.title)}>Recent Chats</h1>
        <FriendshipBar />
        <FriendshipBar />
        <FriendshipBar />
        <FriendshipBar />
        <FriendshipBar />
        <div className={clsx(style.line)}></div>
        <div
          className={clsx(style.mightLikeTitle)}
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <h5>You might like</h5>
          <h5 className={style.titleClick}>See all</h5>
        </div>
        <div className={clsx(style.cardYouMightLike)}>
          <div className={clsx(style.mightLikeBox)}>
            <Avatar
              sx={{ minHeight: 50, minWidth: 50, objectFit: "cover" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5flpk8TODvH3fhfsqBOpPoG_bmqbUA9Zn3A&s"
            ></Avatar>
            <div className={clsx(style.mightLikeBoxInfo)}>
              <h5>Kelvin De Bruyne</h5>
              <div className={clsx(style.relatedFriend)}>
                <div className={clsx(style.listFriends)}>
                  <AvatarGroup
                    max={4}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: 25,
                        height: 25,
                        objectFit: "cover",
                        border: "2px solid white", // Optional: adds a white border for clarity
                        marginLeft: "-8px", // Controls the overlap
                      },
                    }}
                  >
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScRDP7EjRojuWRHHqMTduqxtVec6EQA_uyg&s" />
                    <Avatar src="https://tmssl.akamaized.net//images/foto/galerie/erling-haaland-manchester-city-2024-1727103341-148917.jpg?lm=1727103361" />
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg" />
                  </AvatarGroup>
                </div>
                <h6>15 minnutes</h6>
              </div>
            </div>
          </div>
          <div className={style.mightLikeBoxButton}>
            <Button
              variant="contained"
              color="success"
              style={{ height: "30px" }}
            >
              Follow
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AFAFAF",
                color: "white",
                height: "30px",
              }}
            >
              Ignore
            </Button>
          </div>
        </div>
        <div className={clsx(style.cardYouMightLike)}>
          <div className={clsx(style.mightLikeBox)}>
            <Avatar
              sx={{ minHeight: 50, minWidth: 50, objectFit: "cover" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5flpk8TODvH3fhfsqBOpPoG_bmqbUA9Zn3A&s"
            ></Avatar>
            <div className={clsx(style.mightLikeBoxInfo)}>
              <h5>Kelvin De Bruyne</h5>
              <div className={clsx(style.relatedFriend)}>
                <div className={clsx(style.listFriends)}>
                  <AvatarGroup
                    max={4}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: 25,
                        height: 25,
                        objectFit: "cover",
                        border: "2px solid white", // Optional: adds a white border for clarity
                        marginLeft: "-8px", // Controls the overlap
                      },
                    }}
                  >
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScRDP7EjRojuWRHHqMTduqxtVec6EQA_uyg&s" />
                    <Avatar src="https://tmssl.akamaized.net//images/foto/galerie/erling-haaland-manchester-city-2024-1727103341-148917.jpg?lm=1727103361" />
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg" />
                  </AvatarGroup>
                </div>
                <h6>15 minnutes</h6>
              </div>
            </div>
          </div>
          <div className={style.mightLikeBoxButton}>
            <Button
              variant="contained"
              color="success"
              style={{ height: "30px" }}
            >
              Follow
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AFAFAF",
                color: "white",
                height: "30px",
              }}
            >
              Ignore
            </Button>
          </div>
        </div>
        <div className={clsx(style.line)}></div>
        <div
          className={clsx(style.mightLikeTitle)}
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <h5>Upcoming Events</h5>
          <h5 className={style.titleClick}>See all</h5>
        </div>
        <div className={style.upcomingEventCard}>
          <div className={style.headerCard}>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3BRB8_UQXHgiaQHbWbxsfWWdEi2Xj4ykuQ&s"/>
              <div className={style.headerContent}>
                <h5>Milan Fashion Week</h5>
                <h6>12 Oct 1pm</h6>
              </div>
          </div>
          <div className={style.contentCard}>
          A General talk about design with Sr
          Designer of Logitech Michael Spunfik.
          </div>
          <div>
            
          </div>
        </div>
        <div className={style.upcomingEventCard}>
          <div className={style.headerCard}>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3BRB8_UQXHgiaQHbWbxsfWWdEi2Xj4ykuQ&s"/>
              <div className={style.headerContent}>
                <h5>Milan Fashion Week</h5>
                <h6>12 Oct 1pm</h6>
              </div>
          </div>
          <div className={style.contentCard}>
          A General talk about design with Sr
          Designer of Logitech Michael Spunfik.
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarHome;
