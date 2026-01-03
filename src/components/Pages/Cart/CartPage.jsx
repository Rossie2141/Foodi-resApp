import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartHero from "./CartHero";
import CartItemsList from "./CartItemsList";
import OrderSummary from "./OrderSummary";

import { setActivePage } from "../../../redux/slices/navigationSlice";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../../redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 5 : 0;
  const tax = (subtotal + deliveryFee) * 0.08;
  const total = subtotal + deliveryFee + tax;

  return (
    <div style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      <CartHero />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          gap: "40px",
        }}
      >
        <CartItemsList
          items={cartItems}
          onIncrease={(id) => dispatch(increaseQty(id))}
          onDecrease={(id) => dispatch(decreaseQty(id))}
          onRemove={(id) => dispatch(removeFromCart(id))}
          onContinueShopping={() => {
            dispatch(setActivePage("menu"));
            navigate("/menu");
          }}
        />

        <OrderSummary
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          tax={tax}
          total={total}
          onCheckout={() => alert("Checkout coming soon")}
        />
      </div>
    </div>
  );
}
