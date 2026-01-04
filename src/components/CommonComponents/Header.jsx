import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../redux/slices/navigationSlice";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activePage = useSelector((state) => state.navigation.activePage);

  const handleNav = (page, path) => {
    dispatch(setActivePage(page));
    navigate(path);
    setMobileMenuOpen(false);
  };

  const useStyles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      fontFamily: "Poppins, sans-serif",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      boxSizing: "border-box",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "clamp(18px, 4vw, 24px)",
      color: "#000",
      gap: "5px",
      cursor: "pointer",
    },

    logoIcon: {
      width: "30px",
      height: "30px",
      backgroundColor: "#7ed957",
      color: "#fff",
      borderRadius: "5px",
      textAlign: "center",
      lineHeight: "30px",
      fontWeight: "bold",
    },

    nav: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    navMobile: {
      position: "fixed",
      top: 0,
      right: mobileMenuOpen ? 0 : "-100%",
      width: "70%",
      maxWidth: "300px",
      height: "100vh",
      backgroundColor: "#fff",
      flexDirection: "column",
      padding: "80px 30px",
      gap: "20px",
      transition: "right 0.3s ease",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
      zIndex: 999,
    },

    navLink: {
      cursor: "pointer",
      fontWeight: 500,
      color: "#000",
    },

    activeLink: {
      color: "#7ed957",
    },

    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },

    iconBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
    },

    cart: {
      position: "relative",
      cursor: "pointer",
    },

    cartBadge: {
      position: "absolute",
      top: "-8px",
      right: "-8px",
      backgroundColor: "#7ed957",
      color: "#fff",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    contactBtn: {
      backgroundColor: "#7ed957",
      color: "#fff",
      border: "none",
      borderRadius: "25px",
      padding: "8px 15px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },

    hamburger: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
    },

    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: mobileMenuOpen ? "block" : "none",
      zIndex: 998,
    },

    closeBtn: {
      position: "absolute",
      top: 20,
      right: 20,
      background: "none",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <>
      <header style={useStyles.header}>
        {/* Logo */}
        <div
          style={useStyles.logo}
          onClick={() => handleNav("home", "/")}
        >
          <span style={useStyles.logoIcon}>P</span>
          <span>OODIE</span>
        </div>

        {/* Desktop Nav */}
        <nav style={useStyles.nav} className="desktop-nav">
          <span
            style={{
              ...useStyles.navLink,
              ...(activePage === "home" && useStyles.activeLink),
            }}
            onClick={() => handleNav("home", "/")}
          >
            Home
          </span>

          <span
            style={{
              ...useStyles.navLink,
              ...(activePage === "menu" && useStyles.activeLink),
            }}
            onClick={() => handleNav("menu", "/menu")}
          >
            Menu
          </span>

          <span
            style={{
              ...useStyles.navLink,
              ...(activePage === "services" && useStyles.activeLink),
            }}
            onClick={() => handleNav("services", "/services")}
          >
            Services
          </span>

          <span
            style={{
              ...useStyles.navLink,
              ...(activePage === "offers" && useStyles.activeLink),
            }}
            onClick={() => handleNav("offers", "/offers")}
          >
            Offers
          </span>
        </nav>

        {/* Right */}
        <div style={useStyles.headerActions}>
          <button style={useStyles.iconBtn} onClick={()=>handleNav("account", "/account")}>
            <AccountCircleOutlinedIcon />
          </button>
          

          <button style={useStyles.iconBtn} onClick={()=>handleNav("account", "/account")}>
            <FavoriteBorderOutlinedIcon />
          </button>

          <div style={useStyles.cart}>
            <WorkOutlineIcon  onClick={()=> handleNav("cart", "/cart")}/>
            {/* <span style={useStyles.cartBadge}>8</span> */}
          </div>

          <button style={useStyles.contactBtn} onClick={()=>handleNav("contact","/contact")}>
            <CallOutlinedIcon /> Contact
          </button>

          <button
            style={useStyles.hamburger}
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav style={useStyles.navMobile}>
        <button style={useStyles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </button>

        <span onClick={() => handleNav("home", "/")}>Home</span>
        <span onClick={() => handleNav("menu", "/menu")}>Menu</span>
        <span onClick={() => handleNav("services", "/services")}>Services</span>
        <span onClick={() => handleNav("offers", "/offers")}>Offers</span>
      </nav>

      <div style={useStyles.overlay} onClick={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
