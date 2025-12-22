import React from "react";

const Header = () => {
  const useStyles = {
    header: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 40px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        position: "fixed",  // Make it stick to the top
        top: 0,
        left: 0,
        width: "100%",       // Cover the full width
        zIndex: 1000,        // Ensure it's on top of other content
        },
    logo: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "24px",
      color: "#000",
      gap: "5px",
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
    navLink: {
      textDecoration: "none",
      color: "#000",
      position: "relative",
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
      gap: "15px",
    },
    iconBtn: {
      background: "none",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
    cart: {
      position: "relative",
      fontSize: "18px",
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
      padding: "8px 20px",
      cursor: "pointer",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  };

  return (
    <header style={useStyles.header}>
      {/* Logo */}
      <div style={useStyles.logo}>
        <span style={useStyles.logoIcon}>F</span>
        <span>OODI</span>
      </div>

      {/* Navigation */}
      <nav style={useStyles.nav}>
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
        <button style={useStyles.iconBtn} aria-label="Search">🔍</button>

        <div style={useStyles.cart}>
          👜
          <span style={useStyles.cartBadge}>8</span>
        </div>

        <button style={useStyles.contactBtn}>📞 Contact</button>
      </div>
    </header>
  );
};

export default Header;
