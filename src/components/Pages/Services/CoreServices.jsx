import React from "react";

const ServiceCard = ({ icon, title, desc }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 20,
      padding: 30,
      textAlign: "center",
      boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: "#f1f8f2",
        margin: "0 auto 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
      }}
    >
      {icon}
    </div>

    <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
      {title}
    </h4>

    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
      {desc}
    </p>

    {/* <button
      style={{
        marginTop: 16,
        padding: "8px 20px",
        borderRadius: 20,
        border: "1px solid #39DB4A",
        background: "white",
        color: "#39DB4A",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Learn More
    </button> */}
  </div>
);

const CoreServices = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <span style={{ color: "#39DB4A", fontWeight: 600, fontSize: 14 }}>
          WHAT WE OFFER
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
          Our Core Services
        </h2>
        <p style={{ color: "#666", maxWidth: 600, margin: "10px auto 0" }}>
          Discover the range of services we provide to make your dining
          experience unforgettable
        </p>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
        }}
      >
        <ServiceCard
          icon="🍽️"
          title="Catering Services"
          desc="Professional catering for events, parties, and corporate gatherings."
        />
        <ServiceCard
          icon="🚀"
          title="Fast Delivery"
          desc="Lightning fast delivery service that brings your meals hot and fresh."
        />
        <ServiceCard
          icon="🛒"
          title="Online Ordering"
          desc="Easy-to-use online ordering system with real-time tracking."
        />
        <ServiceCard
          icon="🎁"
          title="Gift Cards"
          desc="Perfect gift cards for food lovers, redeemable anytime."
        />
        <ServiceCard
          icon="⭐"
          title="Loyalty Program"
          desc="Earn rewards and exclusive discounts with every order."
        />
        <ServiceCard
          icon="👨‍🍳"
          title="Private Chef"
          desc="Book a professional chef for exclusive dining experiences."
        />
      </div>
    </section>
  );
};

export default CoreServices;
