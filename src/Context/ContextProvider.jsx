import React,{useState} from 'react';
import { createContext ,useContext, useReducer } from 'react';
import {useNavigate} from 'react-router-dom';
import {cartReducer} from './Reducer';
import products from '../data.json';

export const Context=createContext();

const ContextProvider = ({children}) => {
    const navigate=useNavigate();
    const [total, setTotal] = useState();
    const [prod,setProd]=useState([]);
    const [val,setVal]=useState(prod);


    const HandleProduct=(id)=>{
      navigate("/SingleProduct"+"/"+id);
    }
      const handleTotal=(cart)=>{
    setTotal(
      cart.reduce((acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty, 0)
    );
    }

    const [state, dispatch] = useReducer(cartReducer, {
    products:prod,
    cart: [],
  });


    const getData =(x,y)=>{
    if(y==undefined){
      var data =products.filter(item=>
          item.type==x
      )
      setProd(data);
      setVal(data)
    }
    else{
      data=products.filter(item=>
         item.id==y
        )
        setProd(data);
    }

    }
  return (
    <Context.Provider value={{total,handleTotal,HandleProduct,prod,setProd,val,setVal,getData,state,dispatch}}>
        {children}
    </Context.Provider>
  )
}
export const CartState = () => {
  return useContext(Context);
};


export default ContextProvider;