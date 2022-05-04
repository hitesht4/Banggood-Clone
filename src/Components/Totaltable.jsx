import React from 'react';
import styles from './styles.cart.css';

const Totaltable = () => {
  return (
<>

<table className="tableTotal"> 
     <tbody>
                        <tr >
                            <td className=" py-3 px-5">Item</td>
                            <td className=" py-3 px-5">12345</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid grey"}}>
                            <td className=" py-3 px-5">Shipping</td>
                            <td className=" py-3 px-5">12344</td>
                        </tr>
                        <tr className="py-3 px-5" style={{fontWeight:"bold"}}>
                            <td className=" py-3 px-5">SubTotal</td>
                            <td className=" py-3 px-5">100000</td>
                        </tr>
                         <button className="checkout">CHECKOUT</button>
    </tbody>
    </table>



</>
      
    
  )
}

export default Totaltable