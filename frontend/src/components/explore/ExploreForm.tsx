import React, { useState } from "react";
import clsx from "clsx";
import Grid from "@mui/material/Grid2";
import ExplorePhoto from "./ExplorePhoto";
import { Box, ImageList, ImageListItem, Modal,Button } from "@mui/material";

import style from "./ExploreForm.module.css";

interface ImageItem {
  img: string;
  writer:string;
  title: string;
  content?:string;
  cols?: number;
  rows?: number;
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Explore = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <ImageList
        sx={{ width: "100̀%", height: "100%" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className={style.imageItem}
            onClick={() => handleImageClick(item)}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              className={style.image}
            />
            <div className={style.overlay}>
              <h3>{item.title}</h3>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={!!selectedImage} onClose={handleClose} sx={{backdropFilter: 'blur(2px)'}}>
        <Box
          sx={{
            display:"inline-flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            maxWidth:"70%",
            minWidth:"60%",
            minHeight:"60%",
            transform: "translate(-50%, -50%)",
            height: "auto", // Adjust height based on content
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "8px",
          }}
        >
          {selectedImage && (
            <div className={style.modal_container}>
              <div className={style.modal_contentBox}>
                <h3 className={style.modal_title} >{selectedImage.title}</h3>
                <h3 className={style.modal_writer} >{selectedImage.writer}</h3>
                <h3 className={style.modal_content} >{selectedImage.content}</h3>
                <Button variant="contained" style={{left:10,bottom:10, position:"absolute"}}>Goto</Button>
              </div>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className={style.modal_img}
              />
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};
const itemData = [
  {
    img: "https://img.vietcetera.com/wp-content/uploads/2019/08/ChauBui-Featured.jpg",
    title: "Breakfast",
    writer: 'Anata Konsivala',
    content: "Get ready for an unforgettable experience at Fashion Week 2024, taking place from 20/9 to 27/9 in the heart of [City Name]. This prestigious event will feature a stunning lineup of the world’s most renowned designers, emerging talents, and visionary artists, all coming together to showcase their latest collections",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://blog.vn.revu.net/wp-content/uploads/2023/10/chau-bui-1.jpg",
    title: "Burger",
    writer: 'Anata Konsivala',
    rows: 2,
    cols: 1,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Carolina_Herrera_AW14_12.jpg/640px-Carolina_Herrera_AW14_12.jpg",
    title:
      "CameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCameraCamera",
    writer: 'Anata Konsivala',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6y-1zKiaT4RvG55Postd-nJSBYw9hDwZvA&s",
    writer: 'Anata Konsivala',
    title: "Coffee",
    cols: 1,
    rows: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOOCMQk621TH-9t0jPwdIiGQSQBAOC-GdBw&s",
    writer: 'Anata Konsivala',
    title: "Hats",
    cols: 1,
    rows: 2,
  },
  {
    img: "https://cdnmedia.webthethao.vn/uploads/2024-08-03/thu-vinh-anh-5.jpg",
    writer: 'Anata Konsivala',
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oN_exoZHFCQdXxzFKF4IyNf_HW4ZAj3rzQ&s",
    writer: 'Anata Konsivala',
    title: "BasketballBasketballBasketballBasketballBasketballBasketballBasketballBasketballBasketball",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkydq-hZTMWFP3vG74BPtJB2zBG5TKr2QT3Q&s",
    writer: 'Anata Konsivala',
    title: "Fern",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/2b/ee/be/2beebedbdb8023ea6bb166a43bf1716d.jpg",
    writer: 'Anata Konsivala',
    title: "Mushrooms",
    rows: 3,
    cols: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Qt_Gp2FOd4qddRStPR5nQkB9SYou3P1b0g&s",
    writer: 'Anata Konsivala',
    title: "Tomato basil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkmppzC5XvjwvQBFeYApa-w6SQtNCBn2CfQ&s",
    writer: 'Anata Konsivala',
    title: "Sea star",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78ATguGDY1SUg2EHy-4Xyl1VwwUBgoF7sqg&s",
    writer: 'Anata Konsivala',
    title: "Bike",
    cols: 2,
  },
];

export default Explore;
