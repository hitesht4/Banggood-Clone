import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import {Form ,Alert} from 'react-bootstrap';
import Footer2 from '../Components/Footer2';
import NavbarL from '../Components/NavbarL';
import {Context} from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';


const Main=styled.form`
 width:90%;
 margin:50px auto;
 display:flex;
 background-color:whitesmoke;
 gap:30px;
`;
const Container=styled.div`
 width:90%;
 margin:auto;
 display:flex;
 gap:30px;

`;
const Cont1=styled.div`
flex:6;
 padding:40px;
 background-color:white;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Cont2=styled.div`
flex:4;
 padding:40px;
 background-color:white;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Button=styled.button`
background-color:#ff6e26;
color:white;
border:0;
border-radius:5px;
`;

const Payement = () => {
    const {total}=useContext(Context);
    const [flag,setFlag]=useState(false);
    const navigate=useNavigate();
    const [a,setA]=useState("");
    const [b,setB]=useState("");
    const [c,setC]=useState("");
    const [d,setD]=useState("");
    const [el,setE]=useState("");
    const [f,setF]=useState("");

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(a===""||b===""||c===""||d===""||el===""||f===""){
           setFlag(true);
       }
       else{
           navigate("/cardDetails");
       }
    }
  return (
      <>
    <NavbarL/>
   
        <Main>
    <Cont1>
    <Container><h3>Shipping Address</h3></Container>
    
<Container className="mt-4">
<div style={{width:"50%"}}>
   <Form.Label style={{fontWeight:"bold"}}>Name</Form.Label>
   <div style={{display:"flex",gap:"20px"}}>
  <Form.Control
    type="text"
    placeholder="Enter Your Name"
    onChange={(e)=>setA(e.target.value)}/>
    </div>
</div>
    <div style={{width:"50%"}}>
   <Form.Label style={{fontWeight:"bold"}}>Address</Form.Label>
  <Form.Control
    type="text"
    placeholder="Address"
    onChange={(e)=>setB(e.target.value)}/>
    </div>
</Container>
    
<Container className="mt-4">
    <div style={{width:"50%"}}>
    <Form.Label  style={{fontWeight:"bold"}}>Address Line 1</Form.Label>
    <Form.Control
    type="text"
    placeholder="Address Line 1 (Optional)"/>
    
    </div>
    <div style={{width:"50%"}}>
    <Form.Label style={{fontWeight:"bold"}}> Address Line 2</Form.Label>
    <Form.Control
    type="text"
    placeholder="Address Line 2 (Optional)"/>
    </div>
</Container>

<Container className="mt-4">
    <div style={{width:"50%"}}>
    <Form.Label  style={{fontWeight:"bold"}}>Country/Region</Form.Label>
    <Form.Control
    type="text"
    placeholder="Enter Country"
    onChange={(e)=>setC(e.target.value)}/>
    
    </div>
    <div style={{width:"50%"}}>
    <Form.Label style={{fontWeight:"bold"}}>State/Province/Region</Form.Label>
    <Form.Control
    type="text"
    placeholder="Enter State/Province/Region"
    onChange={(e)=>setD(e.target.value)}/>
    </div>
</Container>

    <Container className="mt-4">
    <div style={{width:"50%"}}>
    <Form.Label  style={{fontWeight:"bold"}}>City</Form.Label>
    <Form.Control
    type="text"
    placeholder="City"
    onChange={(e)=>setE(e.target.value)}/>
    
    </div>
    <div style={{width:"50%"}}>
    <Form.Label style={{fontWeight:"bold"}}>ZIP/Postal Code</Form.Label>
    <Form.Control
    type="text"
    placeholder="Postal Code"
    onChange={(e)=>setF(e.target.value)}/>
    </div>
    </Container>
     
    
    {flag ?<Alert variant="danger" className="p-1 mt-3" style={{textAlign:"center"}}>
        Address Not Filled Correctly
    </Alert>:""}
     

    </Cont1>

   <Cont2>
      <h3>Discounts</h3>  
      <h5 style={{color:'grey'}}>Coupons(0 available)</h5>
<Form.Label htmlFor="inputPassword5">Apply Coupon</Form.Label>
<div style={{display:"flex",gap:"20px"}}>
    <Form.Control
    type="text"
    aria-describedby="passwordHelpBlock"/>
    <button style={{border:"none"}}>Apply</button>
</div>

<div style={{borderTop:"1px solid grey",padding:"10px",marginTop:"20px"}}>
<h5 style={{color:"grey"}}>Points (0 available)</h5>
</div>
<div style={{borderBottom:"1px solid grey",borderTop:"0.25px solid grey",padding:"10px"}}>
<h5 style={{color:"grey"}}>Allowance (0 available)</h5>
</div>

    <div style={{display:"flex",justifyContent:"space-between"}}>
     <h4 className="mt-3">Total Amount</h4>
     <h4 className="mt-3">US ${total}</h4>
     </div>
    <Button 
    type="submit"
    style={{width:"100%"}}
    className="mt-4 py-2"
    onClick={handleSubmit}>
        Pay
    </Button>

    

    </Cont2>


     </Main>
  
    <Footer2></Footer2>
    </>
  )
}

export default Payement