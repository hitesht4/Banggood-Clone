import React,{useState} from 'react';
import { createContext ,useContext, useReducer } from 'react';
import {useNavigate} from 'react-router-dom';
import {cartReducer} from './Reducer';

export const Context=createContext();

const ContextProvider = ({children}) => {
    const [id,setId]=useState(0);
    const navigate=useNavigate();
    const [prod,setProd]=useState([]);
    const [val,setVal]=useState(prod);


    const HandleProduct=(ver)=>{
        setId(ver)
      navigate("/SingleProduct");
    }

    const [state, dispatch] = useReducer(cartReducer, {
    products:prod,
    cart: [],
  });
    const getData = async(x)=>{
      try{
      let r=await fetch(`http://localhost:8080/data?type=${x}`);
      let data =await r.json();
      setProd([...data]);
      setVal([...data]);
      }catch(e){
        console.log(e);
      }
    }
  return (
    <Context.Provider value={{HandleProduct,id,prod,setProd,val,setVal,getData,state,dispatch}}>
        {children}
    </Context.Provider>
  )
}
export const CartState = () => {
  return useContext(Context);
};


export default ContextProvider;