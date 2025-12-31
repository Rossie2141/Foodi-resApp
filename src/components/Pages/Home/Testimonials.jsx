import React from "react";
import StarIcon from "@mui/icons-material/Star";

import ChefImg from "../../../assets/Mask group.jpg"; // use your chef image
import User1 from "../../../assets/Mask group (1).jpg";
import User2 from "../../../assets/Mask group (2).jpg";

const Testimonials = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* LEFT IMAGE */}
        <div style={styles.left}>
          <div style={styles.imageWrapper}>
            <div style={styles.greenBg}></div>

            <img src={ChefImg} alt="Chef" style={styles.chefImg} />

            <div style={styles.badge}>
              Our Best Chef 😊
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div style={styles.right}>
          <span style={styles.tag}>TESTIMONIALS</span>

          <h2 style={styles.title}>
            What Our Customers <br /> Say About Us
          </h2>

          <p style={styles.text}>
            “I had the pleasure of dining at Poodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable.”
          </p>

          <div style={styles.feedback}>
            <div style={styles.avatars}>
              <img src={User1} alt="user" />
              <img src={User2} alt="user" />
            </div>

            <div>
              <p style={styles.feedbackTitle}>Customer Feedback</p>
              <div style={styles.rating}>
                <StarIcon style={styles.star} />
                <span style={styles.score}>4.9</span>
                <span style={styles.reviews}>(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "100px clamp(20px, 6vw, 80px)",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#fff",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "80px",
    flexWrap: "wrap",
  },

  /* LEFT */
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  imageWrapper: {
    position: "relative",
    width: "360px",
    height: "460px",
  },

  greenBg: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "80%",
    backgroundColor: "#7ED957",
    borderRadius: "60px",
    zIndex: 0,
  },

  chefImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    zIndex: 1,
  },

  badge: {
    position: "absolute",
    bottom: "-18px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    padding: "10px 18px",
    borderRadius: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    fontSize: "0.9rem",
    fontWeight: 500,
    zIndex: 2,
  },

  /* RIGHT */
  right: {
    flex: 1,
    maxWidth: "520px",
  },

  tag: {
    color: "#ff6b6b",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "2px",
  },

  title: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 700,
    margin: "16px 0 20px",
    lineHeight: 1.3,
  },

  text: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "35px",
  },

  feedback: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  avatars: {
    display: "flex",
  },

  star: {
    color: "#FFD700",
    fontSize: "1.1rem",
  },

  feedbackTitle: {
    fontWeight: 600,
    marginBottom: "6px",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#444",
  },

  score: {
    fontWeight: 600,
  },

  reviews: {
    color: "#888",
    fontSize: "0.9rem",
  },
};

/* avatar overlap */
styles.avatars["& img"] = undefined;
