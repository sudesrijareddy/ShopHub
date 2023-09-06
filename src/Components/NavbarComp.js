import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { NavLink,Link } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SiTrustedshops} from 'react-icons/si';
import {SlUserFemale} from 'react-icons/sl'
import {LiaUserTieSolid} from 'react-icons/lia'
import {AiOutlineHeart} from 'react-icons/ai';
import {GiBigDiamondRing} from 'react-icons/gi'
import {BsFillBagFill} from 'react-icons/bs';
import {MdLaptopMac} from 'react-icons/md';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component


const NavbarComp = () => {
 
   

  return (
    <nav className={styles.navbar}>
      <NavLink style={{textDecoration:"none"}} to="/">
        <div className={styles.nav1}>
        <SiTrustedshops size={40} color='#E48586'/> 
        <h3 className={styles.name}>Shop Hub</h3>
      </div>
      </NavLink>
      <div className={styles.nav2}>
      <ul className={styles.list}>
      <NavLink to="/" className={styles.home}>
        <li>Home</li>
      </NavLink>
      <NavLink to="/contact" className={styles.contact}>
        <li>Contact</li>
      </NavLink>
        <li className={styles.categories}>
      <Dropdown >
      <Dropdown.Toggle  className={styles.dropdownlist} id="dropdown-basic">
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item className={styles.dropdownitem} as={Link} to="/category/women's clothing"><SlUserFemale/> Women Clothing</Dropdown.Item>
        <Dropdown.Item className={styles.dropdownitem} as={Link} to="/category/men's clothing"><LiaUserTieSolid size={27}/> Men Clothing</Dropdown.Item>
        <Dropdown.Item className={styles.dropdownitem} as={Link} to="/category/jewelery"><GiBigDiamondRing/> Jewellary</Dropdown.Item>
        <Dropdown.Item className={styles.dropdownitem} as={Link} to="/category/electronics"><MdLaptopMac/> Electronics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </li>
      <NavLink to="/login" className={styles.signin}>
        <li><button className={styles.signbtn}>Login</button></li>
      </NavLink>
      <NavLink to="/signup" className={styles.signup}>
        <li><button className={styles.signbtn}>SignUp</button></li>
      </NavLink>
     </ul>
      </div>
      
     <div className={styles.nav3}>
      <NavLink to="/wishlist"><AiOutlineHeart size={35} color='white'/></NavLink>
      <NavLink to="/cart"><BsFillBagFill size={28} color='white'/></NavLink>
     </div>
    </nav>
  )
}

export default NavbarComp