import React from 'react';
import {Form,Button} from 'react-bootstrap';
import styled from 'styled-components';

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
     return(
 <Container>
  <Form.Control className='mb-4 pt-2 pb-2'
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
    placeholder='Email'
  />

  <Form.Control className='mb-2 pt-2 pb-2'
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
    placeholder='Password'
  />
  <div className="d-grid gap-2">
  <Button variant="secondary" size="lg" style={{backgroundColor:"#ff522f",marginTop:"20px",border:"none"}}>
    Sign In
  </Button>
  <Form.Label htmlFor="inputPassword5">Forgot Your Password ?</Form.Label>
</div>

<h6 className="mt-2"style={{textAlign:"center", color:"grey"}}>Quick Access With</h6>
<Options>
  <Logo src="https://img.icons8.com/color/344/mac-os--v1.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/facebook-circled--v1.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/google-logo.png" alt="" />
  <Logo src="https://img.icons8.com/color/344/twitter-circled.png" alt="" />
</Options>

</Container>
     )
}

export default SignIn;