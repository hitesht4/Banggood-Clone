import React from 'react';
import styles from './styles.module.css';
import { useNavigate,Link, Navigate } from 'react-router-dom';

const Navigation = () => {
  const navigate=useNavigate();
  const handleClick=(route)=>{
    navigate(route)
  }
  return (
    <div>
        <ul className={styles.Ul}>
            <li onClick={()=>handleClick("/Womens")}>Women's Clothing</li>
            <li onClick={()=>handleClick("/Mens")}>Men's Clothing</li>
            <li>Phones & Accessories</li>
            <li>Electronics</li>
            <li>Tools, Industrial & Scientific</li>
            <li>Toys Hobbies and Robot</li>
            <li>Computers & Office</li>
            <li>Automobiles & Motorcycles</li>
            <li>Sports & Outdoor</li>
            <li>Home, Garden & Furniture</li>
            <li>Jewelry & Watches</li>
            <li>Home Appliances</li>
            <li>Shoes & Bags</li>
            <li>Health,Beauty & Hair</li>
            <li>Lights & Lighting</li>
            </ul>
    </div>
  )
}

export default Navigation