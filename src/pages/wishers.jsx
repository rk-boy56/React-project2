import React from 'react'

const Wishers = ({ bgcolor, para, image, name, level }) => {
  return (
    <div>
      <div style={{ backgroundColor: bgcolor, height: "10px", width: "330px", borderRadius: "10px 10px 0 0" }}></div>
      <div className='m-[20px]'>
        <p className='text-[#000000] text-[18px] font-normal'>{para}</p>
        <div className='flex mt-[20px] gap-[10px]'>
          <img src={image} alt="" />
          <h1 className='text-[#000000] text-[16px] font-bold'>{name}</h1>
          <p className='text-[16px] font-normal text-[#BDBDBD]'>{level}</p>
        </div>
      </div>
    </div>
  )
}

export default Wishers
