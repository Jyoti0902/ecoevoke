import React from 'react'
import '../ComponentsCSS/Main.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import bg1 from '../Assests/bg1.jpg'
import bg2 from '../Assests/bg2.jpg'
import bg3 from '../Assests/bg3.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Main = () => {
    return (
        <>
            <div className='main-container'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <div className='swiper-content'>
                            <img src={bg1} alt="bg1" className='bg1' />
                            <div className='swiper-text'>
                                <h5>SALE &nbsp;&nbsp;UP&nbsp;&nbsp; TO &nbsp;&nbsp;30% &nbsp;&nbsp;OFF</h5>
                                <h1 className='headingAll'>Make People Merry</h1>
                                <p>Patch helps you discover the best plants for your space, delivers them
                                    <br />
                                    to your door and helps you look after them.
                                </p>
                                <div className='swiper-btns'>
                                    <button className='swiper-btn'>Shop indoor</button>
                                    <button className='swiper-btn'>Shop outdoor</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-content'>
                            <img src={bg2} alt="bg2" className='bg2' />
                            <div className='swiper-text'>
                                <h5>SALE &nbsp;&nbsp;UP&nbsp;&nbsp; TO &nbsp;&nbsp;30% &nbsp;&nbsp;OFF</h5>
                                <h1 className='headingAll'>Gifts We Love</h1>
                                <p>Patch helps you discover the best plants for your space, delivers them
                                    <br />
                                    to your door and helps you look after them.</p>
                                <div className='swiper-btns'>
                                    <button className='swiper-btn'>Shop indoor</button>
                                    <button className='swiper-btn'>Shop outdoor</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-content'>
                            <img src={bg3} alt="bg3" className='bg3' />
                            <div className='swiper-text'>
                                <h5>SALE &nbsp;&nbsp;UP&nbsp;&nbsp; TO &nbsp;&nbsp;30% &nbsp;&nbsp;OFF</h5>
                                <h1 className='headingAll'>Plants made easy</h1>
                                <p>Patch helps you discover the best plants for your space, delivers them
                                    <br />
                                    to your door and helps you look after them.
                                </p>
                                <div className='swiper-btns'>
                                    <button className='swiper-btn'>Shop indoor</button>
                                    <button className='swiper-btn'>Shop outdoor</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Main