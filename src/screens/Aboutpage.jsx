
import 'react'
import Header from '../Components/Home/header'
import Team from '../Components/About/Team'
import Values from '../Components/About/Values'
import { Ach } from '../Components/About/Ach'
import Navigate from '../Components/About/Navigate'
import AC from '../Components/About/AC'
import Journey from '../Components/Home/Journey'
import Footer from '../Components/Home/Footer'
import Aboutbanner from '../Components/About/Aboutbanner'

const Aboutpage = () => {
  return (
    <section>
        <Header/>
        <Aboutbanner/>
        <Values/>
        <Ach/>
        <Team/>
        <Navigate/>
        <AC/>
        <Journey/>
        <Footer/>
    
    </section>
  )
}

export default Aboutpage