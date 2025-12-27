import React, { useState } from "react";

/* ---------------- Shared Layout Styles ---------------- */

const containerStyle = {
  width:'100%',
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const sectionStyle = {
  marginBottom: "64px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "32px",
};

/* ---------------- Reusable Dish Card ---------------- */

const DishCard = ({ bg, icon, title, desc, price, rating, badge }) => (
  <div
    style={{
      borderRadius: "24px",
      overflow: "hidden",
      backgroundColor: "white",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    }}
  >
    {badge && (
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          backgroundColor: badge === "New" ? "#39DB4A" : "#FF6B6B",
          color: "white",
          padding: "6px 14px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "600",
          zIndex: 2,
        }}
      >
        {badge}
      </div>
    )}

    <div
      style={{
        background: bg,
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <span style={{ fontSize: "60px" }}>{icon}</span>

      <button
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#39DB4A",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(57,219,74,0.3)",
        }}
      >
        +
      </button>
    </div>

    <div style={{ padding: "20px" }}>
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "8px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "16px",
          lineHeight: "1.5",
        }}
      >
        {desc}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            color: "#39DB4A",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          ${price}
        </span>
        <span style={{ fontWeight: "600" }}>
          ⭐ {rating}
        </span>
      </div>
    </div>
  </div>
);

/* ---------------- Section Wrapper ---------------- */

const MenuSection = ({ title, count, children }) => (
  <section style={sectionStyle}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "32px",
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: "700" }}>{title}</h2>
      <span
        style={{
          backgroundColor: "#f0f0f0",
          padding: "6px 16px",
          borderRadius: "20px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        {count}
      </span>
    </div>

    <div style={gridStyle}>{children}</div>
  </section>
);

/* ---------------- Sections ---------------- */

const MainDishes = () => (
  <MenuSection title="Main Dishes" count="86 dishes">
    <DishCard bg="#e8f5e9" icon="🍜" title="Spicy Noodles" desc="Asian noodles with vegetables" price="18.00" rating="4.8" badge="New" />
    <DishCard bg="#fff8e1" icon="🍕" title="Margherita Pizza" desc="Classic Italian pizza" price="22.00" rating="4.9" />
    <DishCard bg="#fce4ec" icon="🍔" title="Gourmet Burger" desc="Juicy beef burger" price="19.00" rating="4.7" badge="Popular" />
    <DishCard bg="#e8eaf6" icon="🍛" title="Chicken Curry" desc="Aromatic Indian curry" price="21.00" rating="4.6" />
  </MenuSection>
);

const FreshSalads = () => (
  <MenuSection title="Fresh Salads" count="32 dishes">
    <DishCard bg="#e8f5e9" icon="🥗" title="Fattoush Salad" desc="Mediterranean salad" price="24.00" rating="4.9" />
    <DishCard bg="#f1f8e9" icon="🥗" title="Vegetable Salad" desc="Garden fresh veggies" price="26.00" rating="4.6" />
    <DishCard bg="#fff3e0" icon="🥗" title="Egg Vegi Salad" desc="Protein rich salad" price="23.00" rating="4.5" badge="New" />
    <DishCard bg="#e3f2fd" icon="🥗" title="Caesar Salad" desc="Classic Caesar" price="20.00" rating="4.8" />
  </MenuSection>
);

const Desserts = () => (
  <MenuSection title="Sweet Desserts" count="45 desserts">
    <DishCard bg="#fce4ec" icon="🍰" title="Chocolate Cake" desc="Rich chocolate cake" price="15.00" rating="4.9" badge="Popular" />
    <DishCard bg="#fff9e6" icon="🍨" title="Ice Cream" desc="Creamy vanilla ice cream" price="12.00" rating="4.7" />
    <DishCard bg="#f3e5f5" icon="🧁" title="Cupcake" desc="Soft cupcake" price="8.00" rating="4.8" />
    <DishCard bg="#ffebee" icon="🍮" title="Caramel Pudding" desc="Smooth caramel pudding" price="10.00" rating="4.6" badge="New" />
  </MenuSection>
);

/* ---------------- Hero + Filter ---------------- */

const MenuHero = () => (
  <section style={{ padding: "64px 0", background: "#f8fff9" }}>
    <div style={containerStyle}>
      <h1 style={{ fontSize: "48px", textAlign: "center", marginBottom: "16px" }}>
        Our Menu
      </h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", color: "#666" }}>
        Explore our delicious selection of dishes crafted with passion
      </p>
    </div>
  </section>
);

const FilterSection = () => {
  const [active, setActive] = useState("All");
  const filters = ["All", "Main Dish", "Breakfast", "Dessert", "Beverages", "Salads"];

  return (
    <section style={{ padding: "40px 0" }}>
      <div style={{ ...containerStyle, display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: "12px 32px",
              borderRadius: "25px",
              fontWeight: "600",
              border: active === f ? "none" : "2px solid #e8e8e8",
              backgroundColor: active === f ? "#39DB4A" : "white",
              color: active === f ? "white" : "#333",
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>
    </section>
  );
};

/* ---------------- Page ---------------- */

export default function MenuPage() {
  return (
    <div>
      <MenuHero />
      <FilterSection />
      <main style={{ padding: "40px 0" }}>
        <div style={containerStyle}>
          <MainDishes />
          <FreshSalads />
          <Desserts />
        </div>
      </main>
    </div>
  );
}
