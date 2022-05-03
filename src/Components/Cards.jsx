import React from 'react'
import styled from 'styled-components';
import styles from './styles.module.css';


const Li=styled.p`
font-size:14px;
color:grey;
margin-top:-10px;
`;
const Pic=styled.img`
 width:100%;
`;
const Part=styled.div`
text-align:start;
padding:10px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
background-color:white;
`;

const Cards = (props) => {
  return (
    <Part>
        <Pic src={props.url} alt="" />
        <h6>₹{props.price}</h6>
        <Li className={styles.Li}>{props.title}</Li>
    </Part>
  )
}

export default Cards