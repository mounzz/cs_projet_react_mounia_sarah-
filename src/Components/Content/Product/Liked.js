import React, { useState, useEffect } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";


export default function Liked({isLiked, toggleLike}) {
  return (
    <div onClick={toggleLike} className='like'>
    {isLiked ? <AiFillHeart /> : <AiOutlineHeart />  }
  </div>
  )
}
