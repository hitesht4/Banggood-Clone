import React from 'react';
import Navabar from '../Components/Navabar';
import UpperHome from '../Components/UpperHome';
import HotDeals from '../Components/HotDeals';
import AllCards from '../Components/AllCards';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Navabar/>
        <UpperHome/>
        <HotDeals/>
        <AllCards/>
        <Footer/>
    </div>
  )
}

export default Home;