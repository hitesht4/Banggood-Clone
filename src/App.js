import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Product from './Components/Product';
import Womens from './Pages/Womens';
import Mens from './Pages/Mens';
import DropDown from './Components/DropDown';
import SingleProduct from './Pages/SingleProduct';



function App() {
  return (
    <>
  <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/> 
    <Route path="/Womens" element={<Womens/>}/>
    <Route path="/Mens" element={<Mens/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/SingleProduct" element={<SingleProduct/>}/>
  </Routes>
  {/* <SingleCard/> */}
   </>
  );
}

export default App;
