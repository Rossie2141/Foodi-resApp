import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Dish1 from "../assets/Egg salad.jpg";
import Dish2 from "../assets/Fattoush salad.jpg";
import Dish3 from "../assets/Vegetable salad.jpg";

const dishes = [
  {
    id: 1,
    title: "Fattoush salad",
    desc: "Description of the item",
    price: "24.00",
    rating: 4.9,
    img: Dish1,
  },
  {
    id: 2,
    title: "Vegetable salad",
    desc: "Description of the item",
    price: "26.00",
    rating: 4.6,
    img: Dish2,
  },
  {
    id: 3,
    title: "Egg vegi salad",
    desc: "Description of the item",
    price: "23.00",
    rating: 4.5,
    img: Dish3,
  },
  
];

const SplDishes = () => {
  return (
    <section style={styles.section}>
      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <span style={styles.tag}>SPECIAL DISHES</span>
          <h2 style={styles.title}>
            Standout Dishes <br /> From Our Menu
          </h2>
        </div>

        <div style={styles.arrows}>
          <button style={{ ...styles.arrowBtn, background: "#f2f2f2" }}>
            <ArrowBackIosNewIcon fontSize="small" />
          </button>
          <button style={{ ...styles.arrowBtn, background: "#7ED957", color: "#fff" }}>
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div style={styles.cards}>
        {dishes.map((dish) => (
          <div key={dish.id} style={styles.card}>
            {/* Heart */}
            <div style={styles.heart}>
              <FavoriteBorderIcon fontSize="small" />
            </div>

            {/* Image */}
            <img src={dish.img} alt={dish.title} style={styles.image} />

            {/* Content */}
            <h4 style={styles.cardTitle}>{dish.title}</h4>
            <p style={styles.desc}>{dish.desc}</p>

            <div style={styles.bottom}>
              <span style={styles.price}>${dish.price}</span>
              <span style={styles.rating}>
                <StarIcon style={styles.star} /> {dish.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SplDishes;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "80px clamp(20px, 5vw, 60px)",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#fff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "50px",
    flexWrap: "wrap",
    gap: "20px",
  },

  tag: {
    color: "#ff6b6b",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "2px",
  },

  title: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 700,
    marginTop: "10px",
    lineHeight: 1.3,
  },

  arrows: {
    display: "flex",
    gap: "12px",
  },

  arrowBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "22px",
    padding: "30px 25px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  },

  heart: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "48px",
    height: "48px",
    background: "#7ED957",
    borderTopRightRadius: "22px",
    borderBottomLeftRadius: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  cardTitle: {
    fontSize: "1.05rem",
    fontWeight: 600,
    marginBottom: "8px",
  },

  desc: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "20px",
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#ff6b6b",
    fontWeight: 600,
    fontSize: "1rem",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontWeight: 500,
    color: "#444",
  },

  star: {
    color: "#FFD700",
    fontSize: "1.1rem",
  },
};
