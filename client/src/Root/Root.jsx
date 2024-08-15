import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

const Root = () => {
  return (
    <div className='container mx-auto' data-theme="ratro">
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </div>
  )
}

export default Root