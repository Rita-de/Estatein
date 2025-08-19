import  'react'
import PBanner from '../Components/Prop/PBanner'
import Discover from '../Components/Prop/Discover'
import Message from '../Components/Prop/Message'
import Journey from '../Components/Home/Journey'
import Header from '../Components/Home/header'
import Footer from '../Components/Home/Footer'

const Property = () => {
  return (
    <section>
      <Header/>
     <PBanner/>
     <Discover/>
     <Message/>
     <Journey/>
     <Footer/>
    </section>
  )
}

export default Property