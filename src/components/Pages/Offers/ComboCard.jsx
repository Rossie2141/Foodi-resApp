import React from "react";

const ComboCard = ({ title, price, desc, bg }) => {
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 20,
        background: bg,
        color: "white",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: 14, opacity: 0.9 }}>{desc}</p>
      <h2 style={{ margin: "12px 0" }}>{price}</h2>
      <button
        style={{
          padding: "8px 18px",
          borderRadius: 20,
          border: "none",
          background: "#fff",
          color: "#333",
          cursor: "pointer",
        }}
      >
        Order Combo
      </button>
    </div>
  );
};

export default ComboCard;
