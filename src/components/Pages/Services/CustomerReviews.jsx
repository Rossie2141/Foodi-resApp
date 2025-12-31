import React from "react";

const ReviewCard = ({ name, initials, text }) => (
  <div
    style={{
      background: "#fff",
      padding: 24,
      borderRadius: 20,
      boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#39DB4A",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        marginBottom: 12,
      }}
    >
      {initials}
    </div>
    <h4 style={{ fontWeight: 700 }}>{name}</h4>
    <p style={{ fontSize: 14, color: "#666", marginTop: 6 }}>{text}</p>
  </div>
);

const CustomerReviews = () => {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <span style={{ color: "#39DB4A", fontWeight: 600, fontSize: 14 }}>
          CUSTOMER REVIEWS
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800 }}>
          What Our Customers Say
        </h2>
      </div>

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 30,
        }}
      >
        <ReviewCard
          initials="SM"
          name="Sarah Mitchell"
          text="Absolutely loved the food and fast delivery. Highly recommended!"
        />
        <ReviewCard
          initials="JD"
          name="John Davis"
          text="Great variety, excellent taste, and amazing service."
        />
        <ReviewCard
          initials="EM"
          name="Emma Rodriguez"
          text="Poodi never disappoints. Best food delivery app!"
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
