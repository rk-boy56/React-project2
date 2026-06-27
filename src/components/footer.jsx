import { Button } from '@mui/material'
import React from 'react'

import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='container py-[80px]'>
            <div className=' flex justify-between mb-[50px]'>
                <div>
                    <img src="public/Logo.png" alt="" />
                </div>
                <div>
                    <h1 className='text-[24px] font-medium'>LINKS</h1>
                    <ul className='text-[#292830] text-[18px] font-medium'>
                        <li className='mt-[8px]'>Home</li>
                        <li className='mt-[8px]'>About us</li>
                        <li className='mt-[8px]'>Careers</li>
                        <li className='mt-[8px]'>Pricing</li>
                        <li className='mt-[8px]'>Features</li>
                        <li className='mt-[8px]'>Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[24px] font-medium' >LEGAL</h1>
                    <ul className='text-[#292830] text-[18px] font-medium'>
                        <li className='mt-[8px]'>Terms of use</li>
                        <li className='mt-[8px]'>Terms of conditions</li>
                        <li className='mt-[8px]'>Privecy policy</li>
                        <li className='mt-[8px]'>Cookie policy</li>
                    </ul>
                </div>

                <div className='relative'>
                    <h1 className='text-[24px] font-medium'>NEWSLETTER</h1>
                    <p className='text-[#BDBDBD] text-[20px] font-normal my-[20px]'>Over 25000 people have subscribed</p>
                    <input className='border-1 rounded-[8px] border-[#292830] ps-[20px] py-[15px] w-[300px]' type="email" placeholder="Enter your email" />
                    <Button
                        variant="outlined"
                        sx={{
                            color: "#FF7235",
                            color: "white",
                            background: "#FF7235",
                            border: "none",
                            marginTop: "30px",
                            position: "absolute",
                            right: "30px",
                            top: "85px"


                        }}
                    > Subscribe</Button>


                    <p className='text-[#BDBDBD] text-[14px] font-normal mt-[15px]'>We don’t sell your email and spam</p>
                </div>


            </div>
            <hr className='text-[#BDBDBD33] mb-[20px]' />
            <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                    <p>Privacy & Terms</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <p>Copyright @ 2022 xpence</p>
                </div>
                <div className='flex gap-[10px]'>
                    <FaFacebookSquare />
                    <FaSquareTwitter />
                    <IoLogoLinkedin />
                </div>
            </div>
        </div>

    )
}

export default Footer
