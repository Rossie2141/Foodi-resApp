import React from "react";

const useStyles = () => {
  return {
    menuWrapper: {
      width: "100%",
      background: "#fff",
      padding: "24px 0",
    },
    menuInner: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 32px",
    },
    menuTitle: {
      fontSize: "36px",
      fontWeight: 700,
      textAlign: "center",
      marginTop: "48px",
    },
    menuSubtitle: {
      textAlign: "center",
      color: "#666",
      margin: "12px 0 64px",
    },
    categoryBar: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "64px",
      flexWrap: "wrap",
    },
    categoryPill: {
      padding: "14px 28px",
      borderRadius: "999px",
      border: "2px solid #e6e6e6",
      background: "#fff",
      fontWeight: 600,
      color: "#333",
    },
    categoryPillActive: {
      padding: "14px 28px",
      borderRadius: "999px",
      border: "2px solid #6fdc5c",
      background: "#6fdc5c",
      fontWeight: 600,
      color: "#fff",
    },
    sectionHeader: {
      margin: "48px 0 24px",
    },
    sectionHeaderTitle: {
      margin: 0,
      fontSize: "28px",
    },
    sectionHeaderCount: {
      fontSize: "14px",
      color: "#777",
    },
    menuGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "28px",
    },
    menuCard: {
      background: "white",
      borderRadius: "24px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
      overflow: "hidden",
    },
    menuCardTop: {
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    menuIcon: {
      fontSize: "48px",
    },
    addBtn: {
      position: "absolute",
      bottom: "16px",
      right: "16px",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "none",
      background: "#5dd35d",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
    },
    menuCardBody: {
      padding: "20px",
    },
    menuCardTitle: {
      margin: "0 0 6px",
      fontSize: "18px",
    },
    menuCardDesc: {
      fontSize: "14px",
      color: "#777",
      marginBottom: "16px",
    },
    menuCardFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      fontWeight: 600,
      color: "#4caf50",
    },
  };
};

export default function MenuComponents() {
  const styles = useStyles();
  
  const sections = [
    {
      title: "Main Dishes",
      count: "86 dishes",
      items: [
        {
          name: "Spicy Noodles",
          desc: "Delicious Asian-style noodles with a spicy kick.",
          price: "$18.00",
          rating: 4.8,
          icon: "🍜",
          bg: "#EAF7EA",
        },
        {
          name: "Margherita Pizza",
          desc: "Classic Italian pizza with fresh mozzarella.",
          price: "$22.00",
          rating: 4.9,
          icon: "🍕",
          bg: "#FFF6DD",
        },
        {
          name: "Gourmet Burger",
          desc: "Juicy beef patty with premium toppings.",
          price: "$19.00",
          rating: 4.7,
          icon: "🍔",
          bg: "#FBEAF0",
        },
        {
          name: "Chicken Curry",
          desc: "Aromatic curry with tender chicken.",
          price: "$21.00",
          rating: 4.6,
          icon: "🍛",
          bg: "#EEF0FA",
        },
      ],
    },
    {
      title: "Fresh Salads",
      count: "32 dishes",
      items: [
        {
          name: "Fattoush Salad",
          desc: "Mediterranean salad with crispy pita.",
          price: "$24.00",
          rating: 4.9,
          icon: "🥗",
          bg: "#EAF7EA",
        },
        {
          name: "Vegetable Salad",
          desc: "Fresh garden vegetables with house vinaigrette.",
          price: "$26.00",
          rating: 4.6,
          icon: "🥗",
          bg: "#F2F8E9",
        },
        {
          name: "Egg Vegi Salad",
          desc: "Protein-rich salad with boiled eggs.",
          price: "$23.00",
          rating: 4.5,
          icon: "🥗",
          bg: "#FFF4E0",
        },
        {
          name: "Caesar Salad",
          desc: "Classic Caesar with parmesan and croutons.",
          price: "$20.00",
          rating: 4.8,
          icon: "🥗",
          bg: "#E8F4FF",
        },
      ],
    },
    {
      title: "Sweet Desserts",
      count: "45 desserts",
      items: [
        {
          name: "Chocolate Cake",
          desc: "Rich chocolate cake with creamy frosting.",
          price: "$15.00",
          rating: 4.9,
          icon: "🍰",
          bg: "#FBEAF0",
        },
        {
          name: "Ice Cream",
          desc: "Creamy vanilla ice cream with toppings.",
          price: "$12.00",
          rating: 4.7,
          icon: "🍨",
          bg: "#FFF6DD",
        },
        {
          name: "Cupcake",
          desc: "Delicious cupcake with buttercream frosting.",
          price: "$8.00",
          rating: 4.8,
          icon: "🧁",
          bg: "#F3EAF7",
        },
        {
          name: "Caramel Pudding",
          desc: "Smooth caramel pudding with whipped cream.",
          price: "$10.00",
          rating: 4.6,
          icon: "🍮",
          bg: "#FDECEC",
        },
      ],
    },
  ];

  return (
    <section style={styles.menuWrapper}>
      <div style={styles.menuInner}>
        <h1 style={styles.menuTitle}>Our Menu</h1>
        <p style={styles.menuSubtitle}>
          Explore our delicious selection of dishes crafted with passion
        </p>

        <div style={styles.categoryBar}>
          <div style={styles.categoryPillActive}>All</div>
          <div style={styles.categoryPill}>Main Dish</div>
          <div style={styles.categoryPill}>Breakfast</div>
          <div style={styles.categoryPill}>Dessert</div>
          <div style={styles.categoryPill}>Beverages</div>
          <div style={styles.categoryPill}>Salads</div>
        </div>

        {sections.map((section, idx) => (
          <div key={idx}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionHeaderTitle}>{section.title}</h2>
              <span style={styles.sectionHeaderCount}>{section.count}</span>
            </div>

            <div style={styles.menuGrid}>
              {section.items.map((item, i) => (
                <div style={styles.menuCard} key={i}>
                  <div
                    style={{
                      ...styles.menuCardTop,
                      backgroundColor: item.bg,
                    }}
                  >
                    <span style={styles.menuIcon}>{item.icon}</span>
                    <button style={styles.addBtn}>+</button>
                  </div>

                  <div style={styles.menuCardBody}>
                    <h3 style={styles.menuCardTitle}>{item.name}</h3>
                    <p style={styles.menuCardDesc}>{item.desc}</p>

                    <div style={styles.menuCardFooter}>
                      <span style={styles.price}>{item.price}</span>
                      <span>⭐ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}