import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <h3 style={styles.logo}>Foodi</h3>
          <p style={styles.desc}>
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>

        <div>
          <h4 style={styles.heading}>Useful links</h4>
          <p>About us</p>
          <p>Events</p>
          <p>Blogs</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4 style={styles.heading}>Main Menu</h4>
          <p>Home</p>
          <p>Offers</p>
          <p>Menus</p>
          <p>Reservation</p>
        </div>

        <div>
          <h4 style={styles.heading}>Contact Us</h4>
          <p>example@email.com</p>
          <p>+64 958 248 966</p>
          <p>Social media</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <div style={styles.socials}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>

        <p style={styles.copy}>
          Copyright © 2023 Dscode | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/* ================= STYLES ================= */

const styles = {
  footer: {
    padding: "80px clamp(20px, 6vw, 80px) 40px",
    fontFamily: "Poppins, sans-serif",
  },

  top: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    marginBottom: "50px",
  },

  logo: {
    color: "#7ED957",
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "10px",
  },

  desc: {
    color: "#666",
    maxWidth: "260px",
    lineHeight: 1.6,
  },

  heading: {
    fontWeight: 600,
    marginBottom: "14px",
  },

  bottom: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },

  socials: {
    display: "flex",
    gap: "14px",
    color: "#7ED957",
    fontSize: "1.8rem",
    cursor: "pointer",
  },

  copy: {
    color: "#777",
    fontSize: "0.9rem",
  },
};
