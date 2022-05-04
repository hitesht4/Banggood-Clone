import React from 'react';
import {useState} from 'react';



const Counter=()=>{
    const [counter,setCounter]=useState(0);
    const handleInc=(value)=>{
        setCounter(counter+value);
    }
    const handleDec=(value)=>{
        if(counter>=2){
           setCounter(counter-value);
        }
        
    }
    return (
        <div style={{display:"flex",gap:"10px"}}>
       <button className="px-3 py-0 mx-2"style={{fontWeight:"bold", border:"none"}} onClick={()=>handleInc(1)}>+</button>
        <h4>{counter}</h4>
       <button className="px-3 py-0 mx-2"style={{fontWeight:"bold", border:"none"}} onClick={()=>handleDec(1)}>-</button>
        
        
        </div>
    )
}
export default Counter;