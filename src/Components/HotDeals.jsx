import React from 'react';
import styled from 'styled-components';
import Capture from '../Capture.PNG';

const Main=styled.div`
display:flex;
width:90%;
margin:auto;
gap:20px;
`;
const Container1=styled.div`
width:50%;
display:grid;
grid-template-rows:200px 200px 200px;
height:600px;
`;
const Container2=styled.div`
width:50%;
display:grid;
grid-template-rows:300px 300px;
height:600px;
`;
const Pic=styled.img`
 width:100%;
 height:100%;
`;
const Pic2=styled.img`
 width:100%;
 height:80%;
`;
const Line1=styled.div`
display:flex;
gap:20px;
padding:10px;
`;
const Linem=styled.div`
display:flex;
flex:1;
gap:20px;
padding:10px;
`;
const Part3=styled.div`
width:30%;
`;
const Full=styled.div``



const HotDeals = () => {
  return (
<>
<div style={{width:"90%", margin:"auto",display:"flex",gap:"20px"}} className="mt-3">
    <div style={{flex:1}}>
      <img src={Capture} alt="" style={{width:"100%",height:"100%"}}/>
    </div>
    <div style={{flex:1}}>
      <img src={Capture} alt="" style={{width:"100%",height:"100%"}}/>
    </div>
</div>
<Main>
   <Container1>

<Line1>
    
    <div>
        <Pic src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/BF/6E/e61b7766-277b-4693-88c8-41be80b8ac35.png.webp" alt="" />  
    </div>
    <div>
        <Pic src="https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/E6/D9/8babf585-f54b-4e05-bca3-4afe687382e0.jpg.webp" alt="" />  
    </div>
    <div>
        <Pic src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/16/A4/60bd0fcc-2d90-4e13-b867-fe6ef5fe7af6.jpg.webp" alt="" />  
        </div>
    <div>
        <Pic src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/30/36/08304cbc-ab96-4423-b57d-ff49649e9967.jpg.webp" alt="" />  
    </div>

    </Line1>


<Line1>
       <Linem>
    <div>
        <Pic src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/71/12/d560121d-a349-4f35-a2fb-83e9fe2611b3.jpg.webp" alt="" />  
    </div>
    <div>
        <Pic src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/A1/17/92ad2a67-d4d2-4ecb-bf89-e57233f1f82b.jpg.webp" alt="" />  
    </div>
       </Linem>

    <Linem>
    <div>
        <Pic src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/19/75/72e05eca-8b92-4b78-94e9-120927de0985.jpg.webp" alt="" />  
    </div>
        <div>
        <Pic src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/5F/C9/02f82226-937e-4b5c-8238-e9118f8ccd16.jpg.webp" alt="" />  
    </div>
    </Linem>

  </Line1>



<Line1> 
         <Linem>
    <div>
        <Pic src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F9/07/96b0ba27-7322-4d32-945e-64507d36afe9.jpg.webp" alt="" />  
    </div>
       
        <div>
        <Pic src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/19/F5/32414c9d-2355-41cd-aecf-15dc6573d081.jpg.webp" alt="" />  
        </div>
    </Linem> 

    <Linem>
        <div>
        <Pic src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/62/16/cace8606-6f73-42c4-a51b-e31afe760888.jpg.webp" alt="" />  
        </div>

        <div>
        <Pic src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E8/85/debc3bbd-4f56-4a4c-8f45-511f79d1a702.png.webp" alt="" />  
        </div>
    </Linem> 

    </Line1> 

 </Container1>


 <Container2>
     
     <Line1>
    
       <Part3>
          <Pic2 src="https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/A4/A8/50580b39-1e82-446c-91dc-14c7d4bda9fc.jpg.webp" alt="" />
          <h6>58,372.77</h6>

       </Part3>
       <div>
           <Pic2 src="https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/25/5E/47b4191b-ded6-4eb1-ad9c-ac6c1d5c22d4.jpg.webp" alt="" />
           <h6>1635.87</h6>
       </div>
       <div>
           <Pic2 src="https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/4D/7E/da9be8de-ed24-485f-8a7c-8fd8365ec1b2.jpg.webp" alt="" />
           <h6>1635.87</h6>
        </div>  
     </Line1>
     <Line1>
             
       <div>
          <Pic2 src="https://imgaz.staticbg.com/banggood/os/201908/20190819020401_862.png.webp" alt="" />
          <h6>58,372.77</h6>

       </div>
       <div>
           <Pic2 src="https://imgaz.staticbg.com/banggood/os/201912/20191204011824_561.jpg.webp" alt="" />
           <h6>1635.87</h6>
       </div>
       <div>
           <Pic2 src="https://imgaz.staticbg.com/banggood/os/201908/20190819020446_646.png.webp" alt="" />
           <h6>1635.87</h6>
        </div>  
     
     </Line1>
 </Container2>
</Main>
</>
  )
};

export default HotDeals;
