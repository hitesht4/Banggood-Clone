import React,{useState} from 'react';
import styles from '../Components/styles.module.css';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Logo_White from '../Logo_White.png'; 

const LoginPage = () => {
   const[In,setIn]=useState(true);
   const[Up,setUp]=useState(false);
   

   const handleStop=()=>{
       setUp(true);
       setIn(false);
   }
   const handleTimer=()=>{
       setIn(true);
       setUp(false);
   }
  return (
  <>
<div className={styles.LoginNav}>
  <img style={{marginLeft:"220px"}} src={Logo_White} alt="" />
</div>


<div className={styles.ContainerIn}>    
<div className={styles.control}>
  <div onClick={handleTimer}
  style={{borderBottom:In?"2px solid #ff6e26":"none",color:In?"#ff6e26":"black"}}>
  SIGN IN</div>
  <div 
  onClick={handleStop}
   style={{borderBottom:Up?"2px solid #ff6e26":"none",color:Up?"#ff6e26":"black"}}>
  SIGN UP</div>
</div>
    <div>
     {In?<SignIn/>: <SignUp/> }
     </div>
</div>


<footer>
<div className={styles.loginFooter}>
  <div className={styles.foot}>
      <li>About Banggood.com</li>
      <li>Terms And Conditions</li>
      <li>Privacy Policy</li>
      <li> Help Center</li>
  </div>
<p>Copyright © 2006-2022 Banggood All Rights Reserved.</p>
</div>
</footer>
</>
  )
}

export default LoginPage;


