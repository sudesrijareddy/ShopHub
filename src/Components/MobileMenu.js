import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { SlUserFemale} from 'react-icons/sl';
import {LiaUserTieSolid} from 'react-icons/lia';
import {GiBigDiamondRing} from 'react-icons/gi';
import { MdLaptopMac } from 'react-icons/md';



import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <NavLink to="/" className={styles.menuItem}>Home</NavLink>
      <NavLink to="/contact" className={styles.menuItem}>Contact</NavLink>
      <Dropdown className={styles.menuItem}>
        <Dropdown.Toggle as={NavLink} to="/categories" className={styles.dropdownToggle}>
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="/category/women's clothing">
            <SlUserFemale /> Women Clothing
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/category/men's clothing">
            <LiaUserTieSolid size={27} /> Men Clothing
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/category/jewelery">
            <GiBigDiamondRing /> Jewellery
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/category/electronics">
            <MdLaptopMac /> Electronics
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <NavLink to="/login" className={styles.menuItem}>Login</NavLink>
      <NavLink to="/signup" className={styles.menuItem}>SignUp</NavLink>
    </div>
  );
};

export default MobileMenu;
