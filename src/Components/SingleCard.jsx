import React from 'react';
import styles from './style.css';
import styled from 'styled-components';
import { Button,ButtonGroup } from 'react-bootstrap';
import Recomendations from './Recomendations'
import { CartState } from "../Context/ContextProvider";

const Container=styled.div`
width:90%;
height:700px;
margin:auto;
display:flex;
padding-left:40px;
padding-right:40px;
gap:1;
`;
const Div1=styled.div`
flex:4;
padding:40px;

`;
const Div2=styled.div`
flex:6;
padding:40px;
`;

const Pic=styled.img`
width:100%;
height:100%;
`;
const Det=styled.div`
display:flex;
justify-content:space-between;
text-align: center;
width:85%;
padding-bottom:10px;
border-bottom:0.15px solid grey;
`;
const Det2=styled.div`
display:flex;
gap:10px;

`;

const SingleCard = (props) => {
    const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Container>
     <Div1>
        <Pic src={props.image} alt="" />
     </Div1>
<Div2>
<div>
<h6>{props.name}</h6>
<Det >
     <p>Brand:{props.brand}</p>
     <p style={{marginTop:"-5px"}}><span style={{fontSize:"22px",color:"#ff4b31"}}>★★★★★</span>{props.ratings}</p>
     <p>4 Reviews</p>
     <p> Questions & Answers</p>
     <p>ID: 1861017 </p>
</Det>
<Det2 className="pt-2">
     <h4>US${props.price}</h4>
     <p style={{textDecoration:"line-through"}}>{props.price}</p>
     <h6 style={{color:"#ff4b31",backgroundColor:"#fff5e6",borderRadius:"20px"}}>-28%</h6>
</Det2>
<div style={{backgroundColor:"#ff4b31",color:"white",width:"220px"}} className="mb-0 p-0">US$2.00 New User Allowance</div>
</div>
  <ButtonGroup className="me-2 mt-3 ml-2">
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>S</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>M</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>XL</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>XXL</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>3XL</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>4XL</Button>
    <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"1px solid grey",backgroundColor:"white", color:"grey"}}>5XL</Button>
  </ButtonGroup>

<div>
  <h6 className='mt-3'>Ship From </h6>
      <Button className="m-1 px-4 py-2 Sizebtn" style={{border:"3px solid #ff4b31",backgroundColor:"white", color:"grey"}}>CN</Button>
</div>
 <div className="mb-2 mt-5">
   {cart.some((p) => p.id === props.id) ? (
            <Button className="px-3 py-3" style={{border:"none"}}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: props,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button className="px-5 py-3" style={{border:"none"}}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: props,
                })
              }>Buy Now</Button>)}
  </div>  
     </Div2>
    </Container>
  )
}

export default SingleCard;