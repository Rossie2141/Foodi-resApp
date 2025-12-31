import React from "react";

const Step = ({ number, title, desc }) => (
  <div style={{ textAlign: "center", maxWidth: 220 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "#39DB4A",
        color: "white",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 12px",
      }}
    >
      {number}
    </div>
    <h4 style={{ fontWeight: 700, marginBottom: 6 }}>{title}</h4>
    <p style={{ fontSize: 14, color: "#666" }}>{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section style={{ padding: "80px 20px", background: "#f8fff9" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <span style={{ color: "#39DB4A", fontWeight: 600, fontSize: 14 }}>
          SIMPLE PROCESS
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
          How It Works
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <Step
          number="1"
          title="Choose Your Dish"
          desc="Browse our menu and select your favorite meals."
        />
        <Step
          number="2"
          title="Place Your Order"
          desc="Add items to cart and complete checkout."
        />
        <Step
          number="3"
          title="Fast Delivery"
          desc="We deliver your food quickly and safely."
        />
        <Step
          number="4"
          title="Enjoy Your Meal"
          desc="Relax and enjoy delicious food."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
