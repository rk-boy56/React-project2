import { Box, Button, Card } from '@mui/material'
import React from 'react'
import Section from '../pages/section'
import Sec from '../pages/section2'
import Custom from '../pages/custom'
import Buy from '../pages/buy'
import Wishers from '../pages/wishers'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';

import { IoIosArrowDown } from "react-icons/io";
import Footer from './footer'



const Home = () => {
    return <>
        <section>
            <div className='container flex gap-[100px] pt-[80px] pb-[150px]'>

                <div>
                    <h1 className="text-[96px] text-[#292830] font-bold leading-none">Track your <br /> Expenses to <br /> Save Money</h1>
                    <p className='text-[#BDBDBD] text-[24px] font-normal my-[25px]'>Helps you to organize your income and expenses</p>
                    <div className='flex items-center gap-[30px] mt-[40px]'>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#FFFFFF",
                                backgroundColor: "#FF7235",
                                padding: "20px 40px",
                                display: "flex",
                                gap: "10px",

                            }}
                        >
                            Try free demo  <IoIosArrowDown />
                        </Button>
                        <p className='text-[#BDBDBD] text-[24px] font-normal'>— Web, iOs and Android</p>
                    </div>
                </div>
                <div>
                    <img src="/hbg.png" alt="" />
                </div>
            </div>

        </section>

        <section>
            <div className='bg-[#FF7235] h-[800px] relative'>
                <img className='absolute bottom-0 left-0' src="/blob1.png" alt="" />
                <img className='absolute top-0 right-0 ' src="/blob2.png" alt="" />
                <div className='container '>
                    <img className='absolute bottom-0 left-[10%] w-[80%]' src="/activities.png" alt="" />
                </div>
            </div>
            <div className='container flex gap-[14%] py-[80px]'>
                <img src="/facebook.png" alt="" />
                <img src="/google.png" alt="" />
                <img src="/cococola.png" alt="" />
                <img src="/linkdein" alt="" />
                <img src="/samsung.png" alt="" />
            </div>
        </section>

        <Section
            subtitle="Always online"
            title={
                <>
                    Real-time <br />
                    support <br />
                    with cloud
                </>
            }
            description={
                <>
                    Tellus lacus morbi sagittis lacus in. Amet nisl at
                    <br />
                    mauris enim accumsan nisi, tincidunt vel. Enim
                    <br />
                    ipsum, amet quis ullamcorper eget ut.
                </>
            }
            linkText="Learn more"
            image="/person.png"
        />

        <Sec
            image="/person2.png"
            subtitle="free some cost"
            title={
                <>
                    Save cost <br /> for you and <br /> family
                </>
            }
            description={
                <>
                    Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis ullamcorper eget ut.
                </>
            }
            linkText="Learn more"

        />

        <Section
            subtitle="Use anytime"
            title={
                <>
                    Use anytime <br /> when you <br /> need
                </>
            }
            description={
                <>
                    Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis ullamcorper eget ut.
                </>
            }
            linkText="Learn more"
            image="/Image.png"

        />

        <section className='container'>
            <div className='flex gap-[15%]'>
                <h1 className="text-[90px] text-[#292830] font-bold leading-none">The Product we <br /> work with.</h1>
                <p className='text-[#BDBDBD] text-[24px] font-normal my-[25px]'>Tellus lacus morbi sagittis lacus in. <br /> Amet nisl at mauris enim aumsan <br /> nisi, tincidunt vel. Enim ipsum, at <br /> quis ullamcorper eget ut.</p>
            </div>
            <div className='flex gap-[60px] py-[80px]'>
                <Custom
                    image="/Vector.png"
                    title="Cross platform"
                    para="Elit esse cillum dolore eu fugiat nulla pariatur"
                />
                <Custom
                    image="/Vector1.png"
                    title="Cloud server"
                    para="Elit esse cillum dolore eu fugiat nulla pariatur"
                />
                <Custom
                    image="/Vector2.png"
                    title="Pure Javascript"
                    para="Elit esse cillum dolore eu fugiat nulla  pariatur"
                />

            </div>
        </section>

        <section className='container'>
            <div className='text-center'>
                <h1 className='text-[72px] font-bold'>Choose your flexible plan.</h1>
            </div>
            <div className='flex gap-[70px] py-[70px]'>
                <Buy
                    image="/icon.png"
                    title="Starter Plan"
                    img2="/tick.png"
                    para="Store unlimited data"
                    para1="Export to pdf, xls, csv"
                    para2="Cloud server support"
                    money="$9.99/"
                    year="year"
                    para3="up to 3 user + 1.99 per user"
                />

                <Buy
                    image="/icon1.png"
                    title="Silver Plan"
                    img2="/tick.png"
                    para="Store unlimited data"
                    para1="Export to pdf, xls, csv"
                    para2="Cloud server support"
                    money="$19.99/"
                    year="year"
                    para3="up to 3 user + 1.99 per user"
                />

                <Buy
                    image="/icon2.png"
                    title="Daimond   Plan"
                    img2="/tick.png"
                    para="Store unlimited data"
                    para1="Export to pdf, xls, csv"
                    para2="Cloud server support"
                    money="$29.99/"
                    year="year"
                    para3="up to 3 user + 1.99 per user"
                />
            </div>
        </section>

        <section>
            <div className='py-[50px]'>
                <div>
                    <h1 className='text-[#000000] font-bold text-[96px] text-center leading-none'>We have millions of <br /> best wishers</h1>
                </div>
                <div className='mt-[90px]'>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        speed={3000} // slide speed (higher = smoother)
                        autoplay={{
                            delay: 0, // no pause between slides
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Wishers
                                bgcolor="#FFBE21"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#4756DF"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher2.png"
                                name="Cameron Cameron,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#3EC1F3"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher3.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#BB7259"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher4.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#3EC1F3"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher3.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#BB7259"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher4.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#FFBE21"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#4756DF"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher2.png"
                                name="Cameron Cameron,"
                                level="CEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Wishers
                                bgcolor="#BB7259"
                                para={
                                    <>
                                        Eleifend fames amet, fames enim. <br />  Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris, <br /> aliquam congue.
                                    </>
                                }
                                image="/wisher4.png"
                                name="Cameron Williamson,"
                                level="CEO"
                            />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>

        <section>
            <div className='bg-[#FF7235] relative text-center pt-[100px] pb-[17%]'>
                <h1 className='text-[72px] text-[#FFFFFF] font-bold leading-none'>20M+ downloaded from 32 <br /> diffrent countires</h1>
                <p className='text-[36px] text-[#FFFFFF] font-medium my-[20px]'>Try demo for 7 days with full features.</p>
                <Button
                    variant="outlined"
                    sx={{
                        color: "#FF7235",
                        backgroundColor: "#FFFFFF",
                        padding: "20px 40px",
                        display: "flex",
                        gap: "10px",
                        margin: "60px auto",
                        borderRadius: "10px",
                        border: "none"
                    }}
                >
                    Try free demo  <IoIosArrowDown />
                </Button>
                <img className='absolute left-0 bottom-0' src="/blob4.png" alt="" />
                <img className='absolute right-0 top-0' src="/blob3.png" alt="" />
                <img className='absolute left-[5%] bottom-[7%]' src="/layer.png" alt="" />
                <img className='absolute right-[8%] bottom-[14%]' src="/layer2.png" alt="" />
            </div>

        </section>

        <Footer/>

    </>
}

export default Home
