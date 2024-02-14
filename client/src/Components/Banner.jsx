import React, { Component } from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import './banner.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




export class Banner extends Component {
  render() {
    return (
      <div>
         <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[200px] h-[500px]' alt="" /> </SwiperSlide>
        
      </Swiper>
    </>
      </div>
    )
  }
}

export default Banner
