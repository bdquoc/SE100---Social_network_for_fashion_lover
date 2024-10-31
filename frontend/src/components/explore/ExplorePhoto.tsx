import React from 'react'
interface ExplorePhotoProps {
    src: string; // Khai báo kiểu dữ liệu cho src
}

function ExplorePhoto({src}:ExplorePhotoProps){
  return (
    <div style={{display:'inline-block'}}>
      <img src={src} style={{maxWidth:350,minWidth:150 ,objectFit:'cover',borderRadius:10}} />
    </div>
  )
}

export default ExplorePhoto
