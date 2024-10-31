import { Avatar} from '@mui/material'
import { Message } from '@mui/icons-material';
import clsx from 'clsx'
import React from 'react'

import style from './FriendshipBar.module.css'
const FriendShipBox = () => {
  // const clsxName = clsx(style.infor,style.name,style.location,style.avt);
  return (
    <div className={clsx(style.container)}>
      <Avatar className={clsx(style.avt)}
      ></Avatar>
      <div className={clsx(style.infor)}>
        <h1 className={clsx(style.name)}>Matriks Studio</h1>
        <h1 className={clsx(style.location)} style={{color:"#B2B2B2"}}>NewYork</h1>
      </div>
      <Message className={style.icon}/>
    </div>
  )
}

export default FriendShipBox
