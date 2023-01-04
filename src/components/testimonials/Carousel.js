import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {TestimonialsData} from '../data/testimonials'
import css from "./Carousel.module.css"


const Carousel = () => {
  return (   
       <div className={css.container}>
        <span className={css.reviews}>Reviews</span>
             <div className={css.carousel} >
                    <Swiper
                        slidesPerGroup={1}
                        slidesPerView={3}
                        spaceBetween={20}
                        className={css.tCarousel}
                        breakpoints={{
                            856: {
                                slidesPerView: 3,
                            },
                            640:{
                                slidesPerView:2,
                            },
                            0:{
                                slidesPerView:1,
                            }
                        }}
                        >
                    {TestimonialsData.map((tesimonial,i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial}>
                            <img src={tesimonial.image} alt="" />  
                            <span>{tesimonial.comment}</span>
                            <hr />
                            <span>{tesimonial.name}</span>                          
                            </div>
                        </SwiperSlide>
                    ))
                    }
                    </Swiper>

            </div>
       </div>
         
  )
}

export default Carousel