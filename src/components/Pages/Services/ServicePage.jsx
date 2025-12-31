import React from "react";
import ServicesHero from "./ServicesHero";
import CoreServices from "./CoreServices";
import HowItWorks from "./HowItWorks";
import WhyChooseFoodi from "./WhyChooseFoodi";
import CustomerReviews from "./CustomerReviews";


const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <CoreServices />
      <HowItWorks />
      <WhyChooseFoodi />
      <CustomerReviews />
    </>
  );
};

export default ServicesPage;
