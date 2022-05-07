import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';
import {Routes, Route} from 'react-router-dom';
import Womens from './Pages/Womens';
import Mens from './Pages/Mens';
import SingleProduct from './Pages/SingleProduct';
import Protected from './Components/Protected';
import Payement from './Pages/Payement';
import CardDetails from './Pages/CardDetails';




function App() {
  return (
    <>
  <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/> 
    <Route path="/Womens" element={<Womens/>}/>
    <Route path="/Mens" element={<Mens/>}/>
    <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
    <Route path="/Cart" element={<Protected Component={Cart}/>}/>
    <Route path="/payement" element={<Payement/>}/>
    <Route path="/cardDetails" element={<CardDetails/>}/>
    
  </Routes> 

   
   
   </>
  );
}

export default App;
