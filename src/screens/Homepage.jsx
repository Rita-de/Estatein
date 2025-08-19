import React from 'react'
import Header from '../Components/Home/header'
import Banner from '../Components/Home/banner'
import Prop from '../Components/Home/Prop'
import Clients from '../Components/Home/Clients'
import Faqs from '../Components/Home/Faqs'
import Journey from '../Components/Home/Journey'
import Footer from '../Components/Home/Footer'

const Homepage = () => {
  return (
    <div>
     <Header/> 
     <Banner/>
     <Prop/>
     <Clients/>
     <Faqs/>
     <Journey/>
     <Footer/>
     
         </div>
  )
}

export default Homepage
