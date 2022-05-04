import React from 'react';
import styles from './styles.module.css';
import Icon from '../Icon.png';
import {ImSearch} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Navbar,Container,InputGroup,Button,FormControl} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { CartState } from "../Context/ContextProvider";




const Navabar = () => {
    const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const Navigate=useNavigate();
   const Move=(route)=>{
   Navigate(route);
 }
  return (
  <div style={{width:"100%" ,border:"1px solid",backgroundColor:"#2d2d38"}}>
  <Container>
    <Navbar expand="lg" variant="light">
    <Container>
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
   <CgProfile style={{color:"white",fontSize:"40px",margin:"20px"}} 
   onClick={()=>Move("/Login")}/>


    <div style={{color:"white",fontSize:"20px"}}>
             <p style={{marginBottom:"-10px",marginTop:"4px"}} >Hello</p>
             <p>SignIn</p>
          </div>
     <AiOutlineShoppingCart style={{color:"white",fontSize:"40px",margin:"20px"}}
     onClick={()=>Move("/Cart")}/>
     <div style={{color:"white"}}>{cart.length}</div>
    </Container>
  </Navbar>
</Container>
</div>
  )
}
 

export default Navabar;
