import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense, useState } from "react";
import api from "./api/axios";
import { setActivePage } from "./redux/slices/navigationSlice";
import { loginSuccess, logout, setLoading } from "./redux/slices/authSlice";
import { fetchCartDB } from "./redux/slices/cartSlice";

import Header from "./components/CommonComponents/Header";
import Footer from "./components/CommonComponents/Footer";
import CartPage from "./components/Pages/Cart/CartPage";
import ContactPage from "./components/Pages/Contact/ContactPage";
import AccountPage from "./components/Pages/Account/AccountPage";
import LoginForm from "./components/Pages/Authorization/LoginForm";
import SignupForm from "./components/Pages/Authorization/SignupForm";
import Favorites from "./components/Pages/Favorites/Favorites";

const Home = lazy(() => import("./components/Pages/Home/Home"));
const MenuPage = lazy(() => import("./components/Pages/Menu/MenuComponents"));
const ServicePage = lazy(() => import("./components/Pages/Services/ServicePage"));
const OfferPage = lazy(() => import("./components/Pages/Offers/OffersPage"));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(true);

  // Verify session ONCE on app load
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await api.get("/auth/me");
        dispatch(loginSuccess(response.data));
        dispatch(fetchCartDB());
      } catch (error) {
        if (error.response?.status === 401) {
          dispatch(logout());
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    verifySession();
  }, [dispatch]);

  // Navigation highlighting
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") dispatch(setActivePage("home"));
    else if (path.includes("menu")) dispatch(setActivePage("menu"));
    else if (path.includes("services")) dispatch(setActivePage("services"));
    else if (path.includes("offers")) dispatch(setActivePage("offers"));
  }, [location, dispatch]);

  const handleLoginSubmit = async (formData) => {
    try {
      const response = await api.post("/auth/login", {
        username: formData.email,
        password: formData.password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      alert(error.response?.data?.detail || "Login failed");
    }
  };

  const handleSignupSubmit = async (formData) => {
    try {
      await api.post("/auth/signup", {
        username: formData.email,
        email: formData.email,
        password: formData.password,
      });
      alert("Account created. Please sign in.");
      setShowLogin(true);
    } catch (error) {
      alert(error.response?.data?.detail || "Signup failed");
    }
  };

  if (loading) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Verifying session...</h2>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "550px" }}>
          {showLogin ? (
            <LoginForm onSubmit={handleLoginSubmit} onToggleForm={() => setShowLogin(false)} />
          ) : (
            <SignupForm onSubmit={handleSignupSubmit} onToggleForm={() => setShowLogin(true)} />
          )}
        </div>
        <Toaster position="top-right" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Toaster position="top-right" />

      <Suspense fallback={<div style={{ textAlign: "center", padding: "3rem" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/liked" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
