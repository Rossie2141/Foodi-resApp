import React from "react";

const OrderSummary = ({
  subtotal,
  tax,
  deliveryFee,
  total,
  onCheckout,
}) => (
  <div
    style={{
      background: "white",
      borderRadius: "24px",
      padding: "30px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      height: "fit-content",
      position: "sticky",
      top: "20px",
    }}
  >
    <h2
      style={{
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "25px",
        paddingBottom: "20px",
        borderBottom: "2px solid #f0f0f0",
      }}
    >
      Order Summary
    </h2>

    <SummaryRow label="Subtotal" value={subtotal} />
    <SummaryRow label="Delivery Fee" value={deliveryFee} />
    <SummaryRow label="Tax (8%)" value={tax} />

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "2px solid #f0f0f0",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: "700" }}>Total</span>
      <span style={{ fontSize: "28px", fontWeight: "700", color: "#39DB4A" }}>
        ${total.toFixed(2)}
      </span>
    </div>

    <button
      onClick={onCheckout}
      style={{
        width: "100%",
        background: "#39DB4A",
        color: "white",
        padding: "16px",
        borderRadius: "15px",
        border: "none",
        fontWeight: "700",
        fontSize: "17px",
        cursor: "pointer",
        marginTop: "25px",
      }}
    >
      Proceed to Checkout
    </button>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    }}
  >
    <span style={{ color: "#666" }}>{label}</span>
    <span style={{ fontWeight: "600" }}>
      ${value.toFixed(2)}
    </span>
  </div>
);

export default OrderSummary;
