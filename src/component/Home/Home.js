import React from 'react'
import Navbar from '../navbar/Navbar'
import Carsoul from '../carsoul/Carsoul'

import Scollbar from '../scroll/Scroll'
import Footer from '../Footer/Footer'
import ServiceProvide from './ServiceProvide'

const Home = () => {
  return (
    <div>

        <Navbar/>
        <Carsoul/>
         <Scollbar/>
         <ServiceProvide/>
        <Footer/>    
    </div>
  )
}

export default Home