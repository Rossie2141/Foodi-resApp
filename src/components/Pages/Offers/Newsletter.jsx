import React from "react";

const Newsletter = () => {
  return (
    <section style={{ padding: "60px 20px", background: "#f1f8f2" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontWeight: 800 }}>Never Miss an Offer!</h2>
        <p style={{ color: "#666", margin: "8px 0 20px" }}>
          Subscribe to get exclusive deals delivered to your inbox
        </p>

        <input
          placeholder="Enter your email address"
          style={{
            padding: "10px 16px",
            borderRadius: 20,
            border: "1px solid #ddd",
            width: 260,
            marginRight: 8,
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            background: "#39DB4A",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
