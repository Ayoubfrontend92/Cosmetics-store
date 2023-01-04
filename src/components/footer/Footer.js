import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {CiLocationOn} from 'react-icons/ci'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {VscSignIn} from 'react-icons/vsc'
import {IoIosContacts} from 'react-icons/io'
import {FiLink} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className={css.container}>
        <hr />
        <div className={css.upFooter}>
        <div className={css.logo}>
            <img src={Logo} alt="logo" />
            <span>adubi</span>
        </div>

            <div className={css.contact}>
            <span>Contact Us</span>
            <span>
                <CiLocationOn className={css.svg}/>
                <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span>
                <BsTelephone className={css.svg}/>
                <span>352-306-4415</span>
            </span><span>
                <HiOutlineMailOpen className={css.svg}/>
                <span>ayoub.frontend1992@gmail.com</span>
            </span>
            </div>
            <div className={css.account}>
                <span>Account</span>
                <span>
                    <VscSignIn className={css.svg}/>
                    <span>Sign In</span>
                </span>
            </div>
            <div className={css.company}>
                <span>Company</span>
                <span>
                    <IoIosContacts className={css.svg}/>
                    <span>About us</span>
                </span>
            </div>
            <div className={css.resources}>
                <span>Resources</span>
                <span>
                    <FiLink className={css.svg}/>
                    <span>Safety Privacy & Terms</span>
                </span>
            </div>
        </div>


        <div className={css.downFooter}>
            <span>Copyright ©2022 by adubi, Inc.</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer