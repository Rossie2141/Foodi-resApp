import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../../redux/slices/favoriteSlice";
import { addToCartDB } from "../../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../redux/slices/navigationSlice";

// Icons (Optional: Use MUI icons if you prefer them over emojis)
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
  // ... I have kept your exact useStyles object here ...
  "*": { boxSizing: "border-box" },
  page: { fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", color: "#333", minHeight: "100vh" },
  hero: { background: "linear-gradient(135deg, #f8fff9 0%, #ffffff 100%)", padding: "60px 80px 40px", textAlign: "center" },
  heroTitle: { fontSize: 48, marginBottom: 15, color: "#1a1a1a" },
  heroSubtitle: { fontSize: 18, color: "#666" },
  container: { maxWidth: 1400, margin: "0 auto", padding: "40px 80px 80px" },
  pageHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30, flexWrap: "wrap", gap: 15 },
  itemsCount: { fontSize: 18, color: "#666", "& span": { fontWeight: 700, color: "#39DB4A" } },
  headerActions: { display: "flex", gap: 15 },
  actionBtn: { padding: "10px 20px", border: "2px solid #e8e8e8", background: "#fff", borderRadius: 12, cursor: "pointer", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s", "&:hover": { borderColor: "#39DB4A", background: "#f8fff9" } },
  categoryBar: { display: "flex", gap: 15, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" },
  categoryPill: { padding: "12px 24px", borderRadius: 12, border: "1px solid #e6e6e6", background: "#fff", fontWeight: 600, color: "#333", cursor: "pointer", transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)", userSelect: "none", "&:active": { transform: "scale(0.95)" } },
  categoryPillActive: { padding: "12px 24px", borderRadius: 12, border: "1px solid #000", background: "#000", fontWeight: 600, color: "#fff", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 30 },
  card: { background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", cursor: "pointer", transition: "all 0.3s ease", position: "relative", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 12px 35px rgba(0,0,0,0.15)" } },
  cardImage: { height: 200, background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, position: "relative" },
  badge: { position: "absolute", top: 15, left: 15, background: "rgba(57,219,74,0.9)", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600 },
  likeBtn: { position: "absolute", top: 15, right: 15, width: 40, height: 40, borderRadius: "50%", border: "none", background: "#fff", fontSize: 20, cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center", "&:hover": { transform: "scale(1.1)" } },
  liked: { color: "#FF6B6B" },
  cartBtn: { position: "absolute", bottom: 15, right: 15, width: 45, height: 45, borderRadius: "50%", border: "none", background: "#39DB4A", color: "#fff", fontSize: 24, cursor: "pointer", boxShadow: "0 4px 12px rgba(57,219,74,0.3)", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", "&:hover": { transform: "scale(1.1)", background: "#2ec93e" } },
  cardContent: { padding: 20 },
  cardTitle: { fontSize: 20, fontWeight: 700, marginBottom: 8 },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 22, fontWeight: 700, color: "#39DB4A" },
  rating: { display: "flex", alignItems: "center", gap: 5, fontWeight: 600 },
});

// Mapping icons back for visual consistency since your mock used emojis
const CATEGORY_ICONS = {
  salad: "🥗",
  dessert: "🍰",
  beverage: "🥤",
  main: "🍜",
  other: "🍱"
};

const Favorites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePage = useSelector((state) => state.navigation.activePage);
  
    const handleNav = (page, path) => {
      dispatch(setActivePage(page));
      navigate(path);
      setMobileMenuOpen(false);
    };
  
  // 1. Get real data from Redux
  const likedItems = useSelector((state) => state.favorites.items);
  const [filter, setFilter] = useState("all");

  // 2. Filter logic
  const filteredItems = filter === "all" 
    ? likedItems 
    : likedItems.filter(item => item.category?.toLowerCase() === filter.toLowerCase());

  const handleToggleLike = (item) => {
    dispatch(toggleFavorite(item));
    toast.error(`Removed ${item.name} from favorites`);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCartDB({ ...item, quantity: 1 }));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <h1 className={classes.heroTitle}>My Favorites</h1>
        <p className={classes.heroSubtitle}>
          Your collection of loved dishes all in one place
        </p>
      </section>

      <div className={classes.container}>
        <div className={classes.pageHeader}>
          <div className={classes.itemsCount}>
            You have <span>{likedItems.length} items</span> in your favorites
          </div>

          <div className={classes.headerActions}>
            <button className={classes.actionBtn}>🔍 Filter</button>
            <button className={classes.actionBtn}>⬆️⬇️ Sort</button>
          </div>
        </div>

        {/* Category Bar with Filter State */}
        <div className={classes.categoryBar}>
          {["all", "main", "salad", "dessert", "beverage"].map((cat) => (
            <div 
              key={cat}
              className={filter === cat ? classes.categoryPillActive : classes.categoryPill}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>

        {likedItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <h2>No favorites yet!</h2>
            <p>Go to the menu and heart some dishes to see them here.</p>
            <button
                onClick={()=>handleNav("menu","/menu")}
                style={{
                  marginTop: "20px",
                  background: "none",
                  border: "none",
                  color: "#39DB4A",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                ← Explore Menu
              </button>
          </div>
        ) : (
          <div className={classes.grid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.cardImage}>
                  <div className={classes.badge}>{item.category || 'Dishes'}</div>
                  {/* Show emoji based on category or default to noodle emoji */}
                  {CATEGORY_ICONS[item.category?.toLowerCase()] || "🍱"}
                  
                  <button 
                    className={`${classes.likeBtn} ${classes.liked}`}
                    onClick={() => handleToggleLike(item)}
                  >
                    ❤️
                  </button>
                  <button 
                    className={classes.cartBtn}
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                </div>

                <div className={classes.cardContent}>
                  <h3 className={classes.cardTitle}>{item.name}</h3>
                  <div className={classes.cardFooter}>
                    <span className={classes.price}>${item.price.toFixed(2)}</span>
                    <div className={classes.rating}>⭐ {item.rating || "5.0"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;