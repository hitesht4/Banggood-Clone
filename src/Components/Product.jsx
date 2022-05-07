import React,{useContext} from 'react';
import styled from 'styled-components';
import styles from './styles.module.css';
import {Context} from '../Context/ContextProvider';

const Div=styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
background-color:white;
`;
const Pic=styled.img`
width:100%;
height:83%;
border-radius:5px;

`;
const Product = (props) => {
  const {HandleProduct}=useContext(Context);

  return (
    <Div onClick={()=>{HandleProduct(props.id)}} className={styles.Product}>
        <Pic src={props.image} alt="" className={styles.Photo}/>
       <div style={{padding:"10px"}}>
       <h5 style={{color:"#ff6e26"}}>${props.price}</h5>
       <p style={{fontSize:"13px"}}>{props.name}</p>
       </div>
     </Div>
  )
}

export default Product;
