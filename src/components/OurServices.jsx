import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const services = [
  {
    icon: <RestaurantIcon />,
    title: "CATERING",
    desc: "Delight your guests with our flavors and presentation",
  },
  {
    icon: <DeliveryDiningIcon />,
    title: "FAST DELIVERY",
    desc: "We deliver your order promptly to your door",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "ONLINE ORDERING",
    desc: "Explore menu & order with ease using our Online Ordering",
  },
  {
    icon: <CardGiftcardIcon />,
    title: "GIFT CARDS",
    desc: "Give the gift of exceptional dining with Foodi Gift Cards",
  },
];

const OurServices = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <span style={styles.tag}>OUR STORY & SERVICES</span>

          <h2 style={styles.title}>
            <span style={styles.underline}>Our Culinary Journey</span>
            <br />
            <span style={styles.underline}>And Services</span>
          </h2>

          <p style={styles.text}>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>

          <button style={styles.btn}>Explore</button>
        </div>

        {/* RIGHT */}
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.icon}>{s.icon}</div>
              <h4 style={styles.cardTitle}>{s.title}</h4>
              <p style={styles.cardText}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "100px clamp(20px, 6vw, 80px)",
    fontFamily: "Poppins, sans-serif",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    gap: "80px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    maxWidth: "520px",
  },

  tag: {
    color: "#ff6b6b",
    fontSize: "0.75rem",
    letterSpacing: "2px",
    fontWeight: 600,
  },

  title: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.3,
    margin: "14px 0 20px",
  },

  underline: {
    display: "inline-block",
    // borderBottom: "4px solid #3b82f6",
    paddingBottom: "4px",
  },

  text: {
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "30px",
  },

  btn: {
    background: "#7ED957",
    border: "none",
    padding: "14px 34px",
    borderRadius: "40px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },

  grid: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(220px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "24px",
    padding: "30px 24px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },

  icon: {
    color: "#7ED957",
    fontSize: "3rem",
    marginBottom: "14px",
  },

  cardTitle: {
    fontWeight: 600,
    marginBottom: "10px",
  },

  cardText: {
    color: "#7a9c7a",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};
