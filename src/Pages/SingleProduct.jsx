import React,{useState,useEffect,useContext} from 'react';
import SingleCard from '../Components/SingleCard';
import {Context} from '../Context/ContextProvider';
import Footer from '../Components/Footer';
import Navabar from '../Components/Navabar';
import Recomendations from '../Components/Recomendations';
import {useParams} from 'react-router-dom';

const SingleProduct = () => {
  const params=useParams();
  const {id}=params;
  const {prod,getData}=useContext(Context);

  
  useEffect(() => {
    getData(undefined ,id);
  }, []);

  return (
    <>
    <Navabar/>
 <div>
        {prod.map(item=>{
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

export default SingleProduct;