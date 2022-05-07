import React from 'react'
import {DiAndroid} from 'react-icons/di';
import {MdQrCodeScanner} from 'react-icons/md';
import {BsPinterest,BsApple,BsTelegram,BsDiscord} from 'react-icons/bs';
import styled from 'styled-components';
import {AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillYoutube,AiOutlineWhatsApp,AiFillMediumCircle} from 'react-icons/ai';
import {FaTiktok,FaBlogger,FaHeadphones,FaShippingFast,FaMedal} from 'react-icons/fa';
import {CgDollar} from 'react-icons/cg';
import {FiHome} from 'react-icons/fi';
import footer from '../footer.PNG';


const FooterDiv=styled.div`
   display:flex;
   background-color:whitesmoke;
   margin-top:20px;
`;
const FooterPart=styled.div`
   flex:1;
   text-align:start;
   padding:30px;
`;
const Lists=styled.ul`
list-style-type:none;
`;

const Li=styled.li`
font-size:15px;
color:grey;
margin-bottom:8px;
`;
const Part=styled.div`
text-align:center;
 flex:1;
 padding:20px;
`;
const Main=styled.div`
background-color:smokewhite;
`;
const Footer = () => {
  return (
      <Main>
      <FooterDiv style={{width:"90%",margin:"auto"}}>
          <Part>
              <FaMedal style={{fontSize:"55px",color:"grey"}}/><br/>
             <h6>Quality and Saving</h6> 
            <p style={{fontSize:"15px",color:"grey"}}>
                Comprehensive quality control and affordable prices
            </p> 
          </Part>
          <Part>
              <FiHome style={{fontSize:"55px",color:"grey"}}/>
             <h6> Global Warehouse</h6>
             <p style={{fontSize:"15px",color:"grey"}}>  37 overseas warehouses</p>
        
          </Part>

          <Part>
            <FaShippingFast style={{fontSize:"55px",color:"grey"}}/>
            <h6> Fast and convenient logistics</h6>
            <p style={{fontSize:"15px",color:"grey"}}>Fast and convenient door to door delivery</p>
             

          </Part>
          <Part>
              <CgDollar style={{fontSize:"55px",color:"grey"}}/>
              <h6>Payment Security</h6>
              <p style={{fontSize:"15px",color:"grey"}}>More than 40 different secure payment methods</p>
              

          </Part>

          <Part>
              <FaHeadphones style={{fontSize:"55px",color:"grey"}}/>
              <h6>Professional service and product warranty</h6>
              <p> 24/7 Customer Service</p>        
          </Part>


      </FooterDiv>


    <FooterDiv>

       <FooterPart>
           <Lists>
               <h6>Get to Know Us</h6>
               <Li>About Banggood.in</Li>
               <Li>Guarantees & Return Policy</Li>
               <Li>Contact Us</Li>
               <Li>Help Center</Li>
               <Li>Site Map</Li>
               <Li>Intellectual Property Claims</Li>
           </Lists>
           <div style={{margin:"30px"}}>
             <h6>Subscribe</h6>
            <p style={{fontSize:"15px",color:"grey"}}>By subscribing you agree to receive email from us.<br/>
              Please read our Privacy Policy</p>
           </div>
          

       </FooterPart>

       <FooterPart>
           <Lists>
               <h6>Payment & Shipping</h6>
               <Li>Payment Methods</Li>
               <Li>BGpay Instruction</Li>
               <Li>Shipping Guide</Li>
               <Li>Locations We Ship To</Li>
               <Li>Estimated Delivery Time</Li>
           </Lists>
           <Lists>
               <h6>Partnership Programs</h6>
               <Li>Drop shipping</Li>
               <Li>Review Club</Li>
               <Li>Affiliate Program</Li>
               <Li>Wholesale Program</Li>
               <Li>Fashion Blogger Program</Li>
           </Lists>
       </FooterPart>
    
       <FooterPart>
           <div>
                <h6 style={{margin:"20px"}}>Download App</h6>
           <div>
               <DiAndroid style={{fontSize:"35px",margin:"20px",color:"grey"}}/>
               <BsApple style={{fontSize:"35px",margin:"20px",color:"grey"}}/>
               <MdQrCodeScanner style={{fontSize:"35px",margin:"20px",color:"grey"}}/>
            </div>
           </div>

           <div>
               <h6 style={{margin:"20px"}}>Follow Us</h6>
               <div>
               <AiFillFacebook style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <AiFillTwitterSquare style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <AiFillInstagram style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <AiFillYoutube style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <BsPinterest style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <FaTiktok style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               </div>
               <div><AiFillMediumCircle style={{fontSize:"25px",margin:"10px",color:"grey"}}/><FaBlogger style={{fontSize:"25px",margin:"10px",color:"grey"}}/><BsDiscord style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <BsTelegram style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               <AiOutlineWhatsApp style={{fontSize:"25px",margin:"10px",color:"grey"}}/>
               </div>
           </div>
           <div>
           <p style={{fontSize:"15px",color:"grey"}}>© 2006-2022 BANGGOOD</p>
           <p style={{fontSize:"15px",color:"grey"}}>TERMS  PRIVACY  SPECIALIZED AFFAIRS</p>
           </div>

       </FooterPart>
    </FooterDiv>

    <div style={{width:"100%",margin:"auto"}}>
        <img  style={{width:"100%"}} src={footer} alt="" />
    </div>
    </Main>
  )
}


export default Footer;
















