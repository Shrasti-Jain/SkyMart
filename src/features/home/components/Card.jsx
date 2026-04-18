import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({count,category}) => {
  let navigate=useNavigate()
  return (
    <div onClick={()=>{
      navigate(`/home/shop?category=${category}`)
    }} className='w-fit cursor-pointer bg-white rounded-2xl text-black flex flex-col gap-2 items-center justify-center px-27  py-5'>
      <img className='w-10  h-10 object-cover' src='https://t4.ftcdn.net/jpg/05/83/55/29/360_F_583552964_jWZqGIg7eHKjZ2WCMHYPrFG3tFpLMYZ4.jpg' alt={category} />
      <h3>{category}</h3>
      <h5>{count} items</h5>
    </div>
  )
}

export default Card
