import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import {SliderProducts} from "../data/products"

  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import './Slider.css'


const Slider = () => {


  return (
    <div className="s-container" >
        <Swiper modules={[Navigation,Pagination] }
        className='mySwiper'
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}
        breakpoints={{
          640:{
            slidesPerView:3,
          },
          0:{
            slidesPerView:1,
          }
        }}
        >
         {SliderProducts.map((slide,i)=>(
          <SwiperSlide key={slide.img}>
                          
                <div className='left-s'>  
                <div className='name'>
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
                </div>

                <span>{slide.price}$</span>
                <div>Shop Now</div>
                </div>
                <img src={slide.img} alt="product" className='img-p' />
                                
          </SwiperSlide>
         ))}
          
        </Swiper>
    </div>

  )
}

export default Slider


