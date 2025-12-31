import React from "react";
import ComboCard from "./ComboCard";

const ComboDeals = () => {
  return (
    <section style={{ padding: "0 20px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>
          Combo Deals
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          <ComboCard
            title="Family Feast Combo"
            desc="Perfect for families & groups"
            price="$45.00"
            bg="linear-gradient(135deg, #6a5acd, #8a7df0)"
          />

          <ComboCard
            title="Party Mega Combo"
            desc="Best for celebrations"
            price="$70.00"
            bg="linear-gradient(135deg, #f06292, #f48fb1)"
          />

          <ComboCard
            title="Quick Lunch Deal"
            desc="Fast & affordable lunch"
            price="$18.00"
            bg="linear-gradient(135deg, #4fc3f7, #81d4fa)"
          />
        </div>
      </div>
    </section>
  );
};

export default ComboDeals;
