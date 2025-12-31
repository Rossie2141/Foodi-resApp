import React from "react";

const OfferCard = ({ tag, title, desc, discount, code, expiry, bg }) => {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 20,
        padding: 20,
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "#ffd966",
          padding: "4px 10px",
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {tag}
      </span>

      <h4 style={{ marginTop: 40, fontWeight: 700 }}>{title}</h4>
      <p style={{ fontSize: 14, color: "#555", margin: "8px 0" }}>{desc}</p>

      <p style={{ color: "#39DB4A", fontWeight: 700 }}>{discount}</p>
      <p style={{ fontSize: 12, color: "#777" }}>Expires: {expiry}</p>

      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "#fff",
            padding: "6px 12px",
            borderRadius: 14,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {code}
        </span>

        <button
          style={{
            padding: "6px 16px",
            borderRadius: 20,
            border: "none",
            background: "#39DB4A",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Claim Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
