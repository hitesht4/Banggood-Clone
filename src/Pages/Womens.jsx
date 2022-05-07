import React, { useEffect,useContext } from 'react';
import AllProducts from '../Components/AllProducts';
import Navabar from '../Components/Navabar';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import Slide from '../Components/Slide';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import {Context} from '../Context/ContextProvider';


const Header=styled.div`
width:90%;
margin:30px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display:flex;
gap:40px;
height:510px;
background-color:whitesmoke;

`;
const Part1=styled.div`
flex:2;
overflow:hidden;
padding:0;
`;
const Part2=styled.div`
flex:8;
background-color:whitesmoke;
`;
const Items=styled.div`
width:90%;
margin:30px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display:flex;
gap:40px;
`;

const Womens = () => {
const {prod,val,setProd,getData}=useContext(Context);


  const Sort=(value,type)=>{

  if(type==="P"){
    if(value==="Low"){
      prod.sort(function(a,b){
        return a.price-b.price;
      })
    }
    else{
      prod.sort(function(a,b){
        return b.price-a.price;
      }) 
    }
    setProd([...prod]);
  }
  else{
      if(value==="Low"){
      prod.sort(function(a,b){
        return a.ratings-b.ratings;
      })
      }
      else{
      prod.sort(function(a,b){
        return b.ratings-a.ratings;
      }) 
    }
    setProd([...prod]);
  }

      
      
  }
  const filterBtn=(col)=>{
    const F=val.filter(item=>
        item.color===col
    )
    setProd([...F]);
    console.log(F);
  }
  const filterBrand=(value)=>{
    const F=val.filter(item=>
          item.brand===value
    )
        setProd([...F]);
        
  }
  const filterCat=(value)=>{
    const F=val.filter(item=>
      item.category===value
      )
      setProd([...F])
  }

  useEffect(()=>{
    getData("w");     
  },[])
  return (
    <>
    <Navabar/>
    <Header>
      <Part1>
        <Navigation/>
      </Part1>
      <Part2>
        <Slide url={"https://imgaz.staticbg.com/banggood/os/202201/20220106000635_678.jpg.webp"}/>
      </Part2>
    </Header>

  <Items>
        <Part1>

        <Sidebar 
        Sort={Sort}
        filterBtn={filterBtn}
        filterBrand={filterBrand}
        filterCat={filterCat}/> 

        </Part1>


    <Part2>
      
        <AllProducts props={prod}/>
     
    </Part2>
  </Items>
   <Footer/>
    </>
  )
}

export default Womens