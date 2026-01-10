import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../redux/slices/navigationSlice";
import { logout } from "../../redux/slices/authSlice";
import api from "../../api/axios";

import { toast } from "react-hot-toast";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

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

  const handleLogout = async () => {
    const tId = toast.loading("Logging out...");
    try {
      await api.post("/auth/logout");
      dispatch(logout());
      toast.success("Logged out", { id: tId });
      navigate("/");
    } catch (err) {
      toast.error("Logout failed", { id: tId });
    }
  };

  // Internal Styles with Media Queries
  const responsiveStyles = `
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .hamburger-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
    }

    .contact-btn-text {
        display: inline;
    }

    @media (max-width: 968px) {
      .desktop-nav {
        display: none;
      }
      .hamburger-btn {
        display: block;
      }
      .contact-btn-text {
        display: none;
      }
      .header-actions {
        gap: 10px !important;
      }
    }
  `;

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
    navMobile: {
      position: "fixed",
      top: 0,
      right: mobileMenuOpen ? 0 : "-100%",
      width: "250px",
      height: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "80px 30px",
      gap: "25px",
      transition: "right 0.3s ease-in-out",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
      zIndex: 1001,
    },
    navLink: {
      cursor: "pointer",
      fontWeight: 500,
      color: "#000",
      fontSize: "16px"
    },
    activeLink: {
      color: "#7ed957",
      fontWeight: "bold"
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
      display: "flex",
      alignItems: "center",
      padding: 0
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
    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: mobileMenuOpen ? "block" : "none",
      zIndex: 1000,
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

  const navItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "Menu", id: "menu", path: "/menu" },
    { name: "Services", id: "services", path: "/services" },
    { name: "Offers", id: "offers", path: "/offers" },
  ];

  return (
    <>
      <style>{responsiveStyles}</style>
      
      <header style={useStyles.header}>
        {/* Logo */}
        <div style={useStyles.logo} onClick={() => handleNav("home", "/")}>
          <span style={useStyles.logoIcon}>P</span>
          <span>OODIE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <span
              key={item.id}
              style={{
                ...useStyles.navLink,
                ...(activePage === item.id && useStyles.activeLink),
              }}
              onClick={() => handleNav(item.id, item.path)}
            >
              {item.name}
            </span>
          ))}
        </nav>

        {/* Action Icons */}
        <div style={useStyles.headerActions} className="header-actions">
          <button style={useStyles.iconBtn} onClick={() => handleNav("account", "/account")}>
            <AccountCircleOutlinedIcon />
          </button>

          <button style={useStyles.iconBtn} onClick={() => handleNav("liked", "/liked")}>
            <FavoriteBorderOutlinedIcon />
          </button>

          <button style={useStyles.iconBtn} onClick={() => handleNav("cart", "/cart")}>
            <WorkOutlineIcon />
          </button>

          <button style={useStyles.contactBtn} onClick={() => handleNav("contact", "/contact")}>
            <CallOutlinedIcon /> 
            <span className="contact-btn-text">Contact</span>
          </button>

          <button style={useStyles.iconBtn} onClick={handleLogout}>
            <LogoutIcon />
          </button>

          {/* Hamburger (Mobile Only) */}
          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav style={useStyles.navMobile}>
        <button style={useStyles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </button>

        {navItems.map((item) => (
          <span
            key={item.id}
            style={{
              ...useStyles.navLink,
              ...(activePage === item.id && useStyles.activeLink),
            }}
            onClick={() => handleNav(item.id, item.path)}
          >
            {item.name}
          </span>
        ))}
      </nav>

      {/* Overlay for Mobile Menu */}
      <div style={useStyles.overlay} onClick={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;