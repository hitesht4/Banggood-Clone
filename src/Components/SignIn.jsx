import React ,{useState ,useEffect} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import styled from 'styled-components';
import {Link ,useNavigate} from 'react-router-dom';

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


const SignIn = () => {
  const [emaillog,setEmaillog] = useState("");
  const [passwordlog,setPasswordlog] = useState("");

  const [flag,setFlag] = useState(false);
  const [home,setHome] = useState(false);
  const navigate=useNavigate();



  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
      setHome(false);
      console.log("Invalid");
    } else {
      setHome(true);
      setFlag(false);
      localStorage.setItem("token",true);
    }
  }
    useEffect(()=>{
      let token=localStorage.getItem("token");
      if(token){
        navigate("/")
      }
    })
   return(
 <Container>
   <form onSubmit={handleLogin}>
  <Form.Control className='mb-4 pt-2 pb-2'
    type="text"
    placeholder='Email'
    onChange={(e)=>{setEmaillog(e.target.value)}}
  />

  <Form.Control className='mb-2 pt-2 pb-2'
    type="password"
    placeholder='Password'
    onChange={(e)=>{setPasswordlog(e.target.value)}}
  />
  <div className="d-grid gap-2">
  <Button 
  size="lg" 
  style={{backgroundColor:"#ff522f",marginTop:"20px",border:"none"}}
  type="submit">
    Sign In
  </Button>
  <Form.Label htmlFor="inputPassword5">Forgot Your Password ?</Form.Label>
</div>

 {flag?<Alert  variant="danger" style={{textAlign:"center"}} className="p-1">
     ⚠ Invalid Credentials
    </Alert>:""}
   {home?<Alert variant="success" style={{textAlign:"center"}}className="p-1">
   Login Successfull <span><Link to="/" className='p-1'>Home</Link></span>
    </Alert>:""}







<h6 className="mt-2"style={{textAlign:"center", color:"grey"}}>Quick Access With</h6>
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

export default SignIn;