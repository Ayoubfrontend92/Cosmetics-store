import React from 'react'
import css from './Testimonials.module.css'
import imgH from '../../assets/testimonialHero.png'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.left}>
                <span>Top Rated</span>
                <span>Seedily say has suitable disposal and boy.Exercise joy man children rejoiced.</span>
            </div>

            <div className={css.midlle}>
                <img src={imgH} alt="hero-img" />

            </div>

            <div className={css.right}>
                <span>350K</span>
                <span>Happy Customers to Us</span>
            </div>


    
    </div>
  )
}

export default Testimonials;