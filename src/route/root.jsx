import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/home-page/navbar';

function Router() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Router;