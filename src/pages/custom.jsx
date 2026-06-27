import React from 'react'

const Custom = ({image, title, para}) => {
  return (
    <>
    <div className='text-center w-[350px] h-[350px] rounded-xl shadow-lg py-[90px] hover:translate-y-2 transition duration-300'>
      <div className='bg-[#FFBD740D] max-w-fit m-auto px-[20px] py-[20px] rounded-full mb-[20px]'>
        <img src={image} alt="" />
      </div>
      <h1 className='text-[30px] font-medium text-[#292830]'>{title}</h1>
      <p className='text-[14px] font-normal text-[#BDBDBD] w-[70%] m-auto'>{para}</p>
    </div>
    </>
  )
}

export default Custom
