import React,{useState,useEffect,useContext} from 'react';
import SingleCard from '../Components/SingleCard';
import {Context} from '../Context/ContextProvider';
import Footer from '../Components/Footer';
import Navabar from '../Components/Navabar';
import Recomendations from '../Components/Recomendations';

const SingleProduct = () => {
  const[data,setdata]=useState([]);
  const {id,setId}=useContext(Context);

   
  const getData=async()=>{
    let res=await fetch(`http://localhost:8080/data?id=${id}`);
    let data=await res.json();
   
    setdata([...data]);
     
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Navabar/>
 <div>
        {data.map(item=>{
            return(
                <>
                 <SingleCard {...item}/>
                 <div>
                <Recomendations/>
                   <Footer/>
                 </div>
                </>
            )
        })}
        </div>
           
        </>
  )
}

export default SingleProduct