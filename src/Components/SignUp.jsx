import React,{useState} from 'react';
import {Form,Button ,Alert} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Container=styled.div`
width:400px;
margin:auto;
padding:30px;
`;
const Options=styled.div`
display:flex;
justify-content:space-evenly;
`;
const Logo=styled.img`
width:45px;
height:45px;
`;


const SignUp = () => {
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
const [flag,setFlag]=useState(false);
const [login,setLogin]=useState(false);


console.log(email,password);



const handleSubmit=(e)=>{
    e.preventDefault();
    if ( !email || !password) {
      setFlag(true);
   
      
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password));
      console.log("Saved in Local Storage");
      setLogin(!login);
      alert("Successfull");
    }
}
  
  return(
 <Container>
   <div style={{backgroundColor:"#fff5e6",color:"#ff4b31"}} className="mb-3 p-2">
     Get Free Gift and $2 allowance for New User</div>
     <form onSubmit={handleSubmit}>
  <Form.Control className='mb-4 pt-2 pb-2'
    type="text"
    placeholder='Email'
    onChange={(e)=>{setEmail(e.target.value)}}
  />
  <Form.Control className='mb-2 pt-2 pb-2'
    type="password"
    placeholder='Password'
    onChange={(e)=>{setPassword(e.target.value)}}
  />
  <div style={{display:"flex",height:"20px"}}>
    <input type="checkbox" className='mt-1' />
  <p style={{fontSize:"13px"}}>I agree to Banggood.com <span style={{textDecoration:"underline"}}>Terms & Conditions</span>
  </p>
  </div>
  <div style={{display:"flex",height:"20px"}}>
    <input type="checkbox" className='mt-1'/>
    <p style={{fontSize:"13px"}}>I agree to Banggood.com  <span style={{textDecoration:"underline"}}>Privacy Policy</span></p>
  </div>
  <div className="d-grid gap-2">
  <Button 
  type="submit" 
  size="lg" 
  style={{backgroundColor:"#ff522f",marginTop:"20px",border:"none"}}>
    Create Your Account
  </Button>
  {flag?<Alert variant="danger" style={{textAlign:"center"}}className="p-1">
    ⚠ Invalid Credentials
    </Alert>:""}
  {/* {login?<Alert variant="success" style={{textAlign:"center"}}className="p-1">
   Login Successfull <span><Link to="/login" className='p-1'>Home</Link></span>
  </Alert>:""} */}
 
  <Form.Label htmlFor="inputPassword5">Forgot Your Password ?</Form.Label>
  
</div>
<h6 style={{textAlign:"center", color:"grey"}} className="mt-2">Quick Access With</h6>
<Options>
  <Logo src="https://img.icons8.com/color/344/mac-os--v1.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/facebook-circled--v1.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/google-logo.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/twitter-circled.png" alt="" />
</Options>


</form>
</Container>
     )
}
export default SignUp;