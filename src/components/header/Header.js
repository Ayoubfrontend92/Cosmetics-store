import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import {BsHandbag} from "react-icons/bs"
import { motion } from "framer-motion"
import {TiThMenuOutline} from 'react-icons/ti'



const Header = () => {

const [showMenu,setShowMenu]=useState(true)


  return (

    
    <div className={css.container}>

        <div className={css.logo}>
            <img src={Logo} alt="logo" />
            <span>adubi</span>
        </div>

        <div className={css.right}>

            <div className={css.bars} onClick={()=>setShowMenu(!showMenu)}>
               <TiThMenuOutline/>
            </div>

              <ul className={css.menu} style={{display: showMenu?'inherit':"none"}}>
                  <li>Collection</li>
                  <li>Brands</li>
                  <li>New</li>
                  <li>Sales</li>
                  <li>ENG</li>
              </ul>

          <input className={css.search} placeholder="Search"/>

          <motion.div whileHover={{ scale: 1.2, rotate: 45 }} whileTap={{scale: 0.8,rotate: -45,borderRadius: "100%"}}>
          <BsHandbag className={css.cart} />
          </motion.div>
              
        </div>
    </div>
  )
}

export default Header
