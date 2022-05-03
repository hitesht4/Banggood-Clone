import React,{useState} from 'react';
import { createContext } from 'react';
import {useNavigate} from 'react-router-dom';

export const Context=createContext();

const ContextProvider = ({children}) => {
    const [id,setId]=useState(0);
    const navigate=useNavigate();


    const HandleProduct=(ver)=>{
        setId(ver)
      navigate("/SingleProduct");
    }
  return (
    <Context.Provider value={{HandleProduct,id}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider;