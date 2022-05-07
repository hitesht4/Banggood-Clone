import React from 'react';
import styled from 'styled-components';
import {Form ,Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import NavbarL from '../Components/NavbarL';
import Footer2 from '../Components/Footer2';

const Cont2=styled.form`
 width:60%;
 margin:40px auto;
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

const CardDetails = () => {
    const navigate=useNavigate();
    const [flag,setFlag]=useState(false);
    const [a,setA]=useState("");
    const [b,setB]=useState("");
    const [c,setC]=useState("");
    const [d,setD]=useState("");

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(a===""||b===""||c===""||d===""){
           setFlag(true);
       }
       else{
           alert("Payement Successfull")
           navigate("/");
       }
    }
  return (
    <div>
        <NavbarL/>
    <Cont2 onSubmit={handleSubmit}>
      <h3>Card Details</h3>   
    <Form.Label className="mt-4" style={{fontWeight:"bold"}}>Card Holder Name</Form.Label>
    <Form.Control
    type="text"
    placeholder="Enter Card Holder Name"
    onChange={(e)=>setA(e.target.value)}
    /> 
    <Form.Label className="mt-4" style={{fontWeight:"bold"}}>Card Number</Form.Label>
    <Form.Control
    type="number"
    placeholder="Enter Card Number"
    onChange={(e)=>setB(e.target.value)}
    />
    <div className="mt-4" style={{display:"flex",gap:"20px"}}>
    <div style={{width:"50%"}}>
    <Form.Label  style={{fontWeight:"bold"}}>Expiry Date</Form.Label>
    <Form.Control
    type="Date"
    onChange={(e)=>setC(e.target.value)}/>
    
    </div>
    <div style={{width:"50%"}}>
    <Form.Label style={{fontWeight:"bold"}}>Cvv</Form.Label>
    <Form.Control
    type="password"
    placeholder="Cvv"
    onChange={(e)=>setD(e.target.value)}/>
    </div>
    </div>
     
    <Button
    type="submit"
    style={{width:"100%"}}
    className="mt-4 py-2"> Pay</Button>

    {flag?<Alert  variant="danger" className="p-1 mt-3" style={{textAlign:"center"}}>
      This is a  alert—check it out!
    </Alert>:""}
    </Cont2>
    <Footer2/>
    </div>
  )
}

export default CardDetails