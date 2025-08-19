import "react";
import Header from "../Components/Home/header";
import Banner from "../Components/Dprop/banner/Banner";
import Details from "../Components/Dprop/Details";

import Journey from "../Components/Home/Journey";
import Footer from "../Components/Home/Footer";
import AgentInfo from "../Components/Dprop/AgentInfo";

export const PropertyD = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Details />
      <AgentInfo/>
      <Journey/>
       <Footer/>
    </div>
  );
};
