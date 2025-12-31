import React from "react";

const tabs = ["Active", "Flash Deals", "New User", "Weekend Special", "Combo Meals"];

const OffersTabs = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: 30 }}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          style={{
            margin: "0 6px",
            padding: "8px 16px",
            borderRadius: 20,
            border: tab === "Active" ? "none" : "1px solid #ddd",
            background: tab === "Active" ? "#39DB4A" : "#fff",
            color: tab === "Active" ? "#fff" : "#333",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default OffersTabs;
