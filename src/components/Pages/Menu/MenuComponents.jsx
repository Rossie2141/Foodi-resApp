import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// Material UI Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Redux Actions
import { addToCart } from "../../../redux/slices/cartSlice";
import { toggleFavorite } from "../../../redux/slices/favoriteSlice";

const API_BASE_URL = "https://foddie-res-app-backend.vercel.app";

const CATEGORY_STYLE_CONFIG = {
  main: { bg: "#EAF7EA", icon: "🍽️" },
  salad: { bg: "#F2F8E9", icon: "🥗" },
  dessert: { bg: "#FBEAF0", icon: "🍰" },
  beverage: { bg: "#E8F4FF", icon: "🥤" },
  other: { bg: "#F5F5F5", icon: "🍱" }
};

const formatCategoryTitle = (text) => {
  if (!text) return "Other";
  return text.split(/[-_ ]+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

const useStyles = () => ({
  menuWrapper: { width: "100%", background: "#fff", padding: "24px 0" },
  menuInner: { maxWidth: "1400px", margin: "0 auto", padding: "0 32px" },
  menuTitle: { fontSize: "36px", fontWeight: 700, textAlign: "center", marginTop: "48px" },
  menuSubtitle: { textAlign: "center", color: "#666", margin: "12px 0 64px" },
  categoryBar: { display: "flex", justifyContent: "center", gap: "15px", marginBottom: "64px", flexWrap: "wrap" },
  categoryPill: { padding: "12px 24px", borderRadius: "12px", border: "1px solid #e6e6e6", background: "#fff", fontWeight: 600, color: "#333", cursor: "pointer", transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)", userSelect: "none" },
  categoryPillActive: { padding: "12px 24px", borderRadius: "12px", border: "1px solid #000", background: "#000", fontWeight: 600, color: "#fff", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
  sectionHeader: { margin: "48px 0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  sectionHeaderLeft: { display: "flex", alignItems: "center", gap: "12px" },
  collapseBtn: { width: "28px", height: "28px", borderRadius: "6px", border: "1px solid #eee", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", color: "#888", transition: "all 0.2s ease" },
  sectionHeaderTitle: { margin: 0, fontSize: "28px", cursor: "pointer", color: '#7ED957' },
  sectionHeaderCount: { fontSize: "14px", color: "#aaa", marginLeft: "8px", fontWeight: 400 },
  swipeContainer: { display: "grid", transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease" },
  menuScroll: { display: "flex", gap: "28px", overflowX: "auto", scrollBehavior: "smooth", scrollbarWidth: "none", padding: "10px 0 30px", minHeight: 0 },
  menuCard: { background: "white", borderRadius: "24px", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", overflow: "hidden", width: "300px", height: "420px", flexShrink: 0, display: "flex", flexDirection: "column" },
  menuCardTop: { height: "160px", minHeight: "160px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  addBtn: { position: "absolute", bottom: "16px", right: "16px", width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "#5dd35d", color: "white", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 },
  menuCardBody: { padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 },
  menuCardTitle: { margin: "0 0 6px", fontSize: "18px", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" },
  menuCardDesc: { fontSize: "14px", color: "#777", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.5" },
  menuCardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" },
  price: { fontWeight: 600, color: "#4caf50", fontSize: "18px" },
  arrowBtn: { width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "#7ED957", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" },
  likeBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", transition: "transform 0.2s ease" }
});

const MenuComponents = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  // Redux Selectors
  const favoriteItems = useSelector((state) => state.favorites.items);

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const scrollRefs = useRef({});

  // Connection Monitoring
  useEffect(() => {
    const handleOnline = () => {
      toast.success("Back online!", { id: "network-status" });
      if (dishes.length === 0) fetchDishes();
    };
    const handleOffline = () => {
      toast.error("You are offline.", { id: "network-status", duration: 4000, icon: "⚠️" });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    if (!navigator.onLine) handleOffline();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dishes.length]);

  const fetchDishes = () => {
    setLoading(true);
    fetch(`${API_BASE_URL}/dishes/`)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
        toast.error("Failed to load menu from server.");
      });
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const groupedDishes = dishes.reduce((acc, dish) => {
    const key = dish.category || "other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(dish);
    return acc;
  }, {});

  const categories = ["all", ...Object.keys(groupedDishes)];

  const toggleCollapse = (cat) => {
    setCollapsedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const scroll = (category, direction) => {
    const container = scrollRefs.current[category];
    if (container) {
      const amount = 320;
      container.scrollLeft += direction === "left" ? -amount : amount;
    }
  };

  if (loading) return <p style={{ textAlign: "center", padding: "100px" }}>Loading Menu...</p>;

  return (
    <section style={styles.menuWrapper}>
      <style>{`
        @keyframes spotlightIn {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .pill-animate { animation: spotlightIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
        .category-pill-hover:active { transform: scale(0.95); }
        .collapse-btn:hover { background: #000 !important; color: #fff !important; border-color: #000 !important; }
        .like-btn-hover:hover { transform: scale(1.2); }
        div::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={styles.menuInner}>
        <h1 style={styles.menuTitle}>Our Menu</h1>
        <p style={styles.menuSubtitle}>Delicious meals, dynamically curated for you.</p>

        {/* Category Filter Bar */}
        <div style={styles.categoryBar}>
          {categories.map((cat, index) => (
            <div
              key={cat}
              className="pill-animate category-pill-hover"
              style={{
                ...(activeCategory === cat ? styles.categoryPillActive : styles.categoryPill),
                animationDelay: `${index * 0.06}s`
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all" ? "All" : formatCategoryTitle(cat)}
            </div>
          ))}
        </div>

        {dishes.length === 0 && !loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
            <p>No dishes found. Please check your connection and refresh.</p>
          </div>
        )}

        {/* Menu Sections by Category */}
        {Object.entries(groupedDishes)
          .filter(([cat]) => activeCategory === "all" || activeCategory === cat)
          .map(([cat, items]) => {
            const config = CATEGORY_STYLE_CONFIG[cat] || CATEGORY_STYLE_CONFIG.other;
            const isCollapsed = collapsedCategories[cat];

            return (
              <div key={cat} style={{ marginBottom: "20px" }}>
                <div style={styles.sectionHeader}>
                  <div style={styles.sectionHeaderLeft}>
                    <button 
                      className="collapse-btn"
                      style={styles.collapseBtn} 
                      onClick={() => toggleCollapse(cat)}
                    >
                      {isCollapsed ? "+" : "-"}
                    </button>
                    <h2 style={styles.sectionHeaderTitle} onClick={() => toggleCollapse(cat)}>
                      {formatCategoryTitle(cat)}
                      <span style={styles.sectionHeaderCount}>({items.length})</span>
                    </h2>
                  </div>
                  
                  {!isCollapsed && items.length > 3 && (
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button style={styles.arrowBtn} onClick={() => scroll(cat, "left")}><ArrowBackIosNewIcon sx={{ fontSize: 16 }} /></button>
                      <button style={styles.arrowBtn} onClick={() => scroll(cat, "right")}><ArrowForwardIosIcon sx={{ fontSize: 16 }} /></button>
                    </div>
                  )}
                </div>

                <div style={{
                  ...styles.swipeContainer,
                  gridTemplateRows: isCollapsed ? "0fr" : "1fr",
                  opacity: isCollapsed ? 0 : 1,
                  pointerEvents: isCollapsed ? "none" : "auto",
                  marginBottom: isCollapsed ? "0" : "40px"
                }}>
                  <div style={{ overflow: "hidden" }}>
                    <div style={styles.menuScroll} ref={(el) => (scrollRefs.current[cat] = el)}>
                      {items.map((item) => {
                        const isLiked = favoriteItems.some(fav => fav.id === item.id);
                        
                        return (
                          <div style={styles.menuCard} key={item.id}>
                            <div style={{ ...styles.menuCardTop, backgroundColor: config.bg }}>
                              <span style={{ fontSize: "48px" }}>{config.icon}</span>
                              <button
                                style={styles.addBtn}
                                onClick={() => {
                                  dispatch(addToCart({ ...item, quantity: 1 }));
                                  toast.success(`${item.name} added!`);
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div style={styles.menuCardBody}>
                              <h3 style={styles.menuCardTitle}>{item.name}</h3>
                              <p style={styles.menuCardDesc}>{item.description || "A delicious house special."}</p>
                              
                              <div style={styles.menuCardFooter}>
                                <span style={styles.price}>${item.price.toFixed(2)}</span>
                                
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                  {item.rating && <span style={{fontSize: '14px'}}>⭐ {item.rating}</span>}
                                  
                                  {/* Like Button */}
                                  <button 
                                    className="like-btn-hover"
                                    style={{ 
                                      ...styles.likeBtn, 
                                      color: isLiked ? "#ff4d4d" : "#ccc" 
                                    }}
                                    onClick={() => {
                                      dispatch(toggleFavorite(item));
                                      isLiked 
                                        ? toast.error(`Removed from favorites`)
                                        : toast.success(`Added to favorites`, { icon: '❤️' });
                                    }}
                                  >
                                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <hr style={{ border: "0", borderTop: "1px solid #eee", marginTop: "10px" }} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default MenuComponents;