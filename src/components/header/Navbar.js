import React from 'react';
import styled from 'styled-components';
import {BsHandbag} from "react-icons/bs"
import { motion } from "framer-motion"
import css from './Navbar.module.css'




import Logo from '../../assets/logo.png'


const Nav = styled.ul`
list-style: none;
display: flex;
justify-content: right;
z-index: 15;
li{
    padding: 18px 30px;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
          color:var(--pink)
        }

}


@media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    background-color: var(--pink);
    position: fixed;
    transition: all 0.3s linear;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li{
        color: #fff;

    }

}

`



const Navbar = ({open}) => {
    return (
        <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="logo" />
            <span>adubi</span>
        </div>
        <Nav open={open}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li><motion.div whileHover={{ scale: 1.2, rotate: 45 }} whileTap={{scale: 0.8,rotate: -45,borderRadius: "100%"}}>
          <BsHandbag />
          </motion.div></li>
            
        </Nav>
        </div>
    );
};

export default Navbar;