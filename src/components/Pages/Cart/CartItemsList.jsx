import React from "react";
import CartItem from "./CartItem";

const CartItemsList = ({
  items,
  onIncrease,
  onDecrease,
  onRemove,
  onContinueShopping,
}) => (
  <div
    style={{
      background: "white",
      borderRadius: "24px",
      padding: "30px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    }}
  >
    <h2 style={{ fontSize: "28px", marginBottom: "25px" }}>
      Cart Items ({items.length})
    </h2>

    {items.length === 0 ? (
      <p style={{ textAlign: "center", color: "#666" }}>
        Your cart is empty.
      </p>
    ) : (
      items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))
    )}

    <button
      onClick={onContinueShopping}
      style={{
        marginTop: "20px",
        background: "none",
        border: "none",
        color: "#39DB4A",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      ← Continue Shopping
    </button>
  </div>
);

export default CartItemsList;
