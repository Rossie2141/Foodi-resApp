import React, { useEffect, useState, useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const API_BASE_URL = "https://foddie-res-app-backend.vercel.app";


const useStyles = () => ({
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
    cursor: "pointer",
  },
  categoryPillActive: {
    padding: "14px 28px",
    borderRadius: "999px",
    border: "2px solid #6fdc5c",
    background: "#6fdc5c",
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
  },
  sectionHeader: {
    margin: "48px 0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHeaderLeft: {
    display: "flex",
    flexDirection: "column",
  },
  sectionHeaderTitle: {
    margin: 0,
    fontSize: "28px",
  },
  sectionHeaderCount: {
    fontSize: "14px",
    color: "#777",
  },
  scrollContainer: {
    position: "relative",
  },
  menuScroll: {
    display: "flex",
    gap: "28px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch",
  },
  menuCard: {
    background: "white",
    borderRadius: "24px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
    overflow: "hidden",
    minWidth: "280px",
    flexShrink: 0,
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
  arrowBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    background: "#6fdc5c",
    boxShadow: "0 4px 16px rgba(111, 220, 92, 0.3)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    transition: "all 0.3s ease",
  },
  arrowContainer: {
    display: "flex",
    gap: "12px",
  },

});

/* =========================
   CATEGORY META
========================= */
const CATEGORY_META = {
  main: { title: "Main Dishes", bg: "#EAF7EA" },
  salad: { title: "Fresh Salads", bg: "#F2F8E9" },
  dessert: { title: "Sweet Desserts", bg: "#FBEAF0" },
  beverage: { title: "Beverages", bg: "#E8F4FF" },
};

/* =========================
   COMPONENT
========================= */
export default function MenuComponents() {
  const styles = useStyles();

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRefs = useRef({});

  /* Fetch dishes */
  useEffect(() => {
    fetch(`${API_BASE_URL}/dishes/`)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load dishes:", err);
        setLoading(false);
      });
  }, []);

  /* Group by category */
  const groupedDishes = dishes.reduce((acc, dish) => {
    const key = dish.category || "other";
    acc[key] = acc[key] || [];
    acc[key].push(dish);
    return acc;
  }, {});

  /* Scroll function */
  const scroll = (category, direction) => {
    const container = scrollRefs.current[category];
    if (container) {
      const scrollAmount = 320;
      container.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "100px", fontSize: "18px" }}>
        Loading menu...
      </p>
    );
  }

  return (
    <section style={styles.menuWrapper}>
      <div style={styles.menuInner}>
        <h1 style={styles.menuTitle}>Our Menu</h1>
        <p style={styles.menuSubtitle}>
          Explore our delicious selection of dishes crafted with passion
        </p>

        {/* CATEGORY PILLS */}
        <div style={styles.categoryBar}>
          <div style={styles.categoryPillActive}>All</div>
          <div style={styles.categoryPill}>Main Dish</div>
          <div style={styles.categoryPill}>Breakfast</div>
          <div style={styles.categoryPill}>Dessert</div>
          <div style={styles.categoryPill}>Beverages</div>
          <div style={styles.categoryPill}>Salads</div>
        </div>

        {/* MENU SECTIONS */}
        {Object.entries(groupedDishes).map(([category, items]) => {
          const meta = CATEGORY_META[category] || {
            title: category,
            bg: "#F5F5F5",
          };

          return (
            <div key={category}>
              <div style={styles.sectionHeader}>
                <div style={styles.sectionHeaderLeft}>
                  <h2 style={styles.sectionHeaderTitle}>{meta.title}</h2>
                  <span style={styles.sectionHeaderCount}>
                    {items.length} dishes
                  </span>
                </div>

                {/* Arrow buttons on the right - only show if more than 4 items */}
                {items.length > 4 && (
                  <div style={styles.arrowContainer}>
                    <button
                      style={styles.arrowBtn}
                      onClick={() => scroll(category, "left")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.background = "#5dd35d";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "#6fdc5c";
                      }}
                    >
                      <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
                    </button>
                    <button
                      style={styles.arrowBtn}
                      onClick={() => scroll(category, "right")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.background = "#5dd35d";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "#6fdc5c";
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                    </button>
                  </div>
                )}
              </div>

              <div style={styles.scrollContainer}>
                {/* Scrollable Cards */}
                <div
                  style={styles.menuScroll}
                  ref={(el) => (scrollRefs.current[category] = el)}
                >
                  {items.map((item) => (
                    <div style={styles.menuCard} key={item.id}>
                      <div
                        style={{
                          ...styles.menuCardTop,
                          backgroundColor: meta.bg,
                        }}
                      >
                        <span style={styles.menuIcon}>🍽️</span>
                        <button style={styles.addBtn}>+</button>
                      </div>

                      <div style={styles.menuCardBody}>
                        <h3 style={styles.menuCardTitle}>{item.name}</h3>
                        <p style={styles.menuCardDesc}>
                          {item.description || "Deliciously prepared dish"}
                        </p>

                        <div style={styles.menuCardFooter}>
                          <span style={styles.price}>
                            ${item.price.toFixed(2)}
                          </span>
                          {item.rating && <span>⭐ {item.rating}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div[style*="overflowX: auto"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}