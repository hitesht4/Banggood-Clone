import React from 'react';
import {MdDelete} from 'react-icons/md';
import Counter from './Counter';
import styled from 'styled-components';


const Imagediv=styled.div`
flex:2;
padding:10px;
`;
const Contents=styled.div`
flex:7;
padding:15px;
`;
const Pic=styled.img`
width:100%;
height:100%;
`;
const Item=styled.div`
display:flex;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background:#fff;
margin:10px;
`;
const Operate=styled.div`
display:flex;
padding:5px;
justify-content:space-between;
`;

const CartProduct = () => {
  return (
           
           <Item>

                <Imagediv>
                    <Pic src="https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/2F/75/71461c5b-5afb-44f4-903d-dd8ec268cd78.jpg.webp" alt="" />
                </Imagediv>

                <Contents>
                         <h6 style={{color:"#ff4b31"}}>Season New Fashion Casual Large Size Striped Wide Leg Shorts Two-piece Slimming Net Red Suit Female - Blue XL</h6>
                         <p style={{color:"grey"}}>Buy It Now +$20 shipping from China</p>
                        <Operate> 
                              <Counter/>
                              <button className="px-3 py-1 mx-2"style={{fontWeight:"bold", border:"none"}}><MdDelete/></button>
                         </Operate>
                </Contents>
            </Item>
  )
}

export default CartProduct