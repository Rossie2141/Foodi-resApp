import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../redux/slices/navigationSlice";

const WhyChooseFoodi = () => {

  const dispatch = useDispatch();
      const navigate = useNavigate();
      const activePage = useSelector((state) => state.navigation.activePage);
    
      const handleNav = (page, path) => {
        dispatch(setActivePage(page));
        navigate(path);
        setMobileMenuOpen(false);
      };


  return (
    <section style={{ padding: "80px 20px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
            Why Choose Poodi?
          </h2>

          <ul style={{ paddingLeft: 0, listStyle: "none", color: "#555" }}>
            {[
              "Fresh ingredients sourced daily",
              "Expert chefs with years of experience",
              "30-minute delivery guarantee",
              "24/7 customer support",
              "Eco-friendly packaging",
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                ✅ {item}
              </li>
            ))}
          </ul>

          <button
            style={{
              marginTop: 20,
              padding: "12px 28px",
              borderRadius: 30,
              border: "none",
              background: "#39DB4A",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={()=>handleNav("menu","/menu")}
          >
            Start Your Order
          </button>
        </div>

        <div
          style={{
            height: 260,
            borderRadius: 20,
            background: "#f1f8f2",
          }}
        />
      </div>
    </section>
  );
};

export default WhyChooseFoodi;
