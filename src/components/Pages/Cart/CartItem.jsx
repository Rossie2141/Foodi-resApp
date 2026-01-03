import React from "react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "120px 1fr auto",
      gap: "20px",
      padding: "25px",
      border: "2px solid #f0f0f0",
      borderRadius: "20px",
      marginBottom: "20px",
    }}
  >
    <div
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "16px",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
      }}
    >
      🍽️
    </div>

    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
        {item.name}
      </h3>
      <p style={{ fontSize: "14px", color: "#666" }}>
        {item.description}
      </p>
      <div style={{ fontSize: "22px", fontWeight: "700", color: "#39DB4A" }}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          background: "#ffebee",
          color: "#FF6B6B",
          border: "none",
          padding: "8px 12px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#f5f5f5",
          padding: "8px",
          borderRadius: "12px",
        }}
      >
        <button onClick={() => onDecrease(item.id)}>-</button>
        <strong>{item.quantity}</strong>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>
    </div>
  </div>
);

export default CartItem;
