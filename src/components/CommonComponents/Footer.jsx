import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../redux/slices/navigationSlice";

const Footer = () => {

  const dispatch = useDispatch();
    const navigate = useNavigate();
    const activePage = useSelector((state) => state.navigation.activePage);
  
    const handleNav = (page, path) => {
      dispatch(setActivePage(page));
      navigate(path);
      setMobileMenuOpen(false);
    };


  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <h3 style={styles.logo}>Poodie</h3>
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
          <p style={styles.clickable} onClick={()=>handleNav("home","/")}>Home</p>
          <p style={styles.clickable} onClick={()=>handleNav("offers","/offers")}>Offers</p>
          <p style={styles.clickable} onClick={()=>handleNav("menu","/menu")}>Menus</p>
          {/* <p>Reservation</p> */}
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
          Copyright © 2025 DJ | All rights reserved
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

  clickable: {
    cursor: "pointer",
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
