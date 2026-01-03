import React from "react";

const ServicesHero = () => {
  return (
    <section
      style={{
        padding: "100px 20px 80px",
        textAlign: "center",
        background:'linear-gradient(135deg, #f8fff9 0%, #ffffff 100%)',
      }}
    >
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
        Our Services
      </h1>

      <p
        style={{
          color: "#666",
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        We're committed to delivering exceptional dining experiences with premium
        quality food, fast delivery, and outstanding customer service.
      </p>
    </section>
  );
};

export default ServicesHero;
