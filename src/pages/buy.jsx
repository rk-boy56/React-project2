import { Button } from '@mui/material'
import React from 'react'

const Buy = ({ image, title, para, img2, para1, para2, money, year, para3 }) => {
  return (
    <div className='py-[50px] px-[50px] w-[28%] rounded-xl shadow-lg hover:shadow-2xl  transition-all duration-300"'>
      <img src={image} alt="" />
      <h1 className='text-[32px] font-semibold text-[#292830] my-[20px]'>{title}</h1>

      <div className='flex gap-[10px] mb-[10px] items-center'>
        <img className='h-[18px]' src={img2} alt="" />
        <p className='text-[18px] font-normal text-[#292830]'>{para}</p>
      </div>

      <div className='flex gap-[10px] mb-[10px] items-center'>
        <img className='h-[18px]' src={img2} alt="" />
        <p className='text-[18px] font-normal text-[#292830]'>{para1}</p>
      </div>

      <div className='flex gap-[10px] mb-[10px] items-center'>
        <img className='h-[18px]' src={img2} alt="" />
        <p className='text-[18px] font-normal text-[#292830]'>{para2}</p>
      </div>

      <div className='flex mb-[5px] mt-[20px]'>
        <h2 className='text-[#000000] text-[24px] font-semibold'>{money}</h2>
        <p className='text-[#BDBDBD] text-[24px] font-extralight'>{year}</p>
      </div>
      <p className='text-[12px] font-normal text-[#BDBDBD]'>{para3}</p>
      <Button

        variant="outlined"
        sx={{
          color: "#FF7235",
          borderColor: "#FF7235",
          marginTop: "30px",
          transition: "all 0.3s ease",

          "&:hover ": {
            color: "white",
            backgroundColor: "#FF7235"
          }

        }}

      > Outlined</Button>


    </div>
  )
}
export default Buy
