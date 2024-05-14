import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/home-page/navbar';
import Footer from '../components/home-page/footer.component';

function Router() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <div className="w-full px-[10%] pr-5 bg-[#181D38]">
     <Footer />
   </div>
    </div>
  )
}

export default Router;