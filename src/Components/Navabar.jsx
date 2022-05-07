import React from 'react';
import styles from './styles.module.css';
import Icon from '../Icon.png';
import {ImSearch} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Navbar,Container,InputGroup,Button,FormControl} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { CartState } from "../Context/ContextProvider";


const Wid=styled.div`
width:100%;
display:flex;
font-weight:bold;
background-color:#2d2d38;
color:white;
margin:auto;
padding-botton:3px;
`;
const Cat=styled.li`
list-style-type:none;
`;



const Navabar = () => {
  const {state: { cart }} = CartState();
  const Navigate=useNavigate();
  const Move=(route)=>{
   Navigate(route);
 }
  return (
  <div style={{width:"100%" ,border:"1px solid",backgroundColor:"#2d2d38"}}>
  <Container>
    <Navbar expand="lg" variant="light">
    <Container className="pb-0 mb-0">
    <img src={Icon} alt=""onClick={()=>Move("/")} />
     <InputGroup className="mb-1 mt-1">
     <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button id="button-addon2" style={{backgroundColor:"#ff6e26",border:"none"}}>
      <ImSearch/> 
    </Button>
  </InputGroup>

   {/* <div style={{color:"white" ,display:"flex"}} className="mx-3">
     <p>Ship to</p>
     <p>India</p>
   </div> */}

   <CgProfile style={{color:"white",fontSize:"50px",margin:"20px"}} 
   onClick={()=>Move("/Login")}/>


    <div style={{color:"white",fontSize:"20px"}} className="mt-3 ml-0">
             <p style={{ fontSize:"14px", marginBottom:"-10px"}}>Hello</p>
             <p>SignIn</p>
          </div>
     <AiOutlineShoppingCart style={{color:"white",fontSize:"50px",margin:"20px"}}
     onClick={()=>Move("/Cart")}/>
     <div style={{color:"white"}}>{cart.length}</div>
    </Container>
  </Navbar>
</Container>
    <Wid>
    <Wid style={{ width:"90%"}}>
    <div style={{ width:"16%"}}>
    <Cat style={{ width:"100%",backgroundColor:"#3a3a44"}} className="py-1 px-2"> 
      Categories
    </Cat>
    </div>
    <div style={{ width:"83%" ,display:"flex",gap:"25px"}} className="px-2 pb-0">
    <Cat className={styles.Navlits}>Flash Deals</Cat>
    <Cat className={styles.Navlits}>Clearance Sale</Cat>
    <Cat className={styles.Navlits}>Flash Sale</Cat>
    </div>
    </Wid>
    </Wid>
</div>
  )
}
 

export default Navabar;
