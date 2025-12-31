import React from "react";
import OffersHero from "./OffersHero";
import DealOfTheDay from "./DealOfTheDay";
import OffersTabs from "./OffersTabs";
import ActiveOffers from "./ActiveOffers";
import ComboDeals from "./ComboDeals";
import Newsletter from "./Newsletter";

const OffersPage = () => {
  return (
    <>
      <OffersHero />
      <DealOfTheDay />
      <OffersTabs />
      <ActiveOffers />
      <ComboDeals />
      <Newsletter />
    </>
  );
};

export default OffersPage;
