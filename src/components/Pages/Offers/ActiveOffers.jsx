import React from "react";
import OfferCard from "./OfferCard";

const ActiveOffers = () => {
  return (
    <section style={{ padding: "0 20px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>
          Active Offers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          <OfferCard
            tag="Limited Time"
            title="Buy 1 Get 1 Free"
            desc="Enjoy a free dish with every order"
            discount="Save up to $22"
            code="BOGO22"
            expiry="Dec 31, 2025"
            bg="#fff6d9"
          />

          <OfferCard
            tag="New User"
            title="First Order Discount"
            desc="Special discount for first-time users"
            discount="40% OFF"
            code="WELCOME40"
            expiry="Jan 10, 2026"
            bg="#eaf7ea"
          />

          <OfferCard
            tag="Weekend"
            title="Weekend Feast"
            desc="Perfect for your weekend cravings"
            discount="30% OFF"
            code="WEEKEND30"
            expiry="Every Weekend"
            bg="#fdeaf1"
          />
        </div>
      </div>
    </section>
  );
};

export default ActiveOffers;
