import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
      zIndex: 1001,
    },
    logoIcon: {
      display: "inline-block",
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
      fontSize: "16px",
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
      alignItems: "flex-start",
      padding: "80px 30px 30px",
      gap: "20px",
      transition: "right 0.3s ease-in-out",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
      zIndex: 999,
    },
    navLink: {
      textDecoration: "none",
      color: "#000",
      position: "relative",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    activeLink: {
      color: "#7ed957",
    },
    arrow: {
      marginLeft: "4px",
      fontSize: "12px",
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(8px, 2vw, 15px)",
    },
    iconBtn: {
      background: "none",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px",
    },
    cart: {
      position: "relative",
      fontSize: "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    },
    contactBtn: {
      backgroundColor: "#7ed957",
      color: "#fff",
      border: "none",
      borderRadius: "25px",
      padding: "8px 15px",
      cursor: "pointer",
      fontSize: "clamp(13px, 2vw, 16px)",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      whiteSpace: "nowrap",
    },
    hamburger: {
      display: "none",
      background: "none",
      border: "none",
      fontSize: "24px",
      cursor: "pointer",
      padding: "5px",
      zIndex: 1001,
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: mobileMenuOpen ? "block" : "none",
      zIndex: 998,
    },
    closeBtn: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "none",
      border: "none",
      fontSize: "24px",
      cursor: "pointer",
      padding: "5px",
    },
  };

  // Media query styles
  const mediaStyles = `
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      .hamburger {
        display: flex !important;
      }
      .contact-text {
        display: none;
      }
    }
    @media (min-width: 769px) {
      .mobile-nav {
        display: none !important;
      }
    }
    @media (max-width: 480px) {
      .search-icon {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      
      <header style={useStyles.header}>
        {/* Logo */}
        <div style={useStyles.logo}>
          <span style={useStyles.logoIcon}>P</span>
          <span>OODIE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={useStyles.nav}>
          <a href="#" style={{ ...useStyles.navLink, ...useStyles.activeLink }}>Home</a>
          <div style={useStyles.navLink}>
            Menu <span style={useStyles.arrow}>▾</span>
          </div>
          <div style={useStyles.navLink}>
            Services <span style={useStyles.arrow}>▾</span>
          </div>
          <a href="#" style={useStyles.navLink}>Offers</a>
        </nav>

        {/* Right Section */}
        <div style={useStyles.headerActions}>
          <button className="search-icon" style={useStyles.iconBtn} aria-label="Search">
            <SearchIcon/>
          </button>

          <div style={useStyles.cart}>
            <WorkOutlineIcon/>
            <span style={useStyles.cartBadge}>8</span>
          </div>

          <button style={useStyles.contactBtn}>
            <CallOutlinedIcon/>
            <span className="contact-text">Contact</span>
          </button>

          {/* Hamburger Menu */}
          <button 
            className="hamburger" 
            style={useStyles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <MenuIcon/>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="mobile-nav" style={useStyles.navMobile}>
        <button style={useStyles.closeBtn} onClick={toggleMobileMenu} aria-label="Close menu">
          <CloseIcon/>
        </button>
        
        <a href="#" style={{ ...useStyles.navLink, ...useStyles.activeLink }} onClick={toggleMobileMenu}>
          Home
        </a>
        <div style={useStyles.navLink}>
          Menu <span style={useStyles.arrow}>▾</span>
        </div>
        <div style={useStyles.navLink}>
          Services <span style={useStyles.arrow}>▾</span>
        </div>
        <a href="#" style={useStyles.navLink} onClick={toggleMobileMenu}>
          Offers
        </a>
      </nav>

      {/* Overlay */}
      <div style={useStyles.overlay} onClick={toggleMobileMenu}></div>
    </>
  );
};

export default Header;