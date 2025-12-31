import React from "react";

const DealOfTheDay = () => {
  return (
    <section style={{ padding: "0 20px 50px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 40,
          borderRadius: 20,
          background: "linear-gradient(135deg, #f77f64, #f79b6c)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span style={{ fontWeight: 600 }}>Deal of the Day!</span>
          <h2 style={{ fontSize: 40, margin: "10px 0" }}>50% OFF</h2>
          <p>Get 50% off on all orders above $50. Limited time offer!</p>
          <button
            style={{
              marginTop: 16,
              padding: "10px 24px",
              borderRadius: 30,
              border: "none",
              background: "#fff",
              color: "#f77f64",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Order Now
          </button>
        </div>

        <div style={{ fontSize: 40 }}>🎉</div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
