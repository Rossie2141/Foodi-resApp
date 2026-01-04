import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense, useState } from "react";
import api from "./api/axios";
import { setActivePage } from "./redux/slices/navigationSlice";
// Import auth actions (Make sure you created this slice)
import { loginSuccess, logout, setLoading } from "./redux/slices/authSlice"; 



// Components
import Header from "./components/CommonComponents/Header";
import Footer from "./components/CommonComponents/Footer";
import CartPage from "./components/Pages/Cart/CartPage";
import ContactPage from "./components/Pages/Contact/ContactPage";
import AccountPage from "./components/Pages/Account/AccountPage";
import LoginForm from "./components/Pages/Authorization/LoginForm";
import SignupForm from "./components/Pages/Authorization/SignupForm";

// Lazy Pages
const Home = lazy(() => import("./components/Pages/Home/Home"));
const MenuPage = lazy(() => import("./components/Pages/Menu/MenuComponents"));
const ServicePage = lazy(() => import("./components/Pages/Services/ServicePage"));
const OfferPage = lazy(() => import("./components/Pages/Offers/OffersPage"));

const App = () => {

  // const api="https://foddie-res-app-backend.vercel.app";
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Get Auth State from Redux
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(true);
  

  // 1. Check for existing session on mount
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await api.get("/auth/me");
        dispatch(loginSuccess(response.data));
      } catch (error) {
        dispatch(logout());
      } finally {
        dispatch(setLoading(false));
      }
    };
    verifySession();
  }, [dispatch]);

  // 2. Handle Navigation Highlighting
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") dispatch(setActivePage("home"));
    else if (path.includes("menu")) dispatch(setActivePage("menu"));
    else if (path.includes("services")) dispatch(setActivePage("services"));
    else if (path.includes("offers")) dispatch(setActivePage("offers"));
  }, [location, dispatch]);

  // 3. Auth Handlers
  const handleLoginSubmit = async (formData) => {
    try {
      // FastAPI expects username/password. Using email as username.
      const response = await api.post("/auth/login", {
        username: formData.email,
        password: formData.password
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      alert(error.response?.data?.detail || "Login Failed");
    }
  };

  const handleSignupSubmit = async (formData) => {
    try {
      await api.post("/auth/signup", {
        username: formData.email,
        email: formData.email,
        password: formData.password
      });
      alert("Account created successfully! Please sign in.");
      setShowLogin(true);
    } catch (error) {
      alert(error.response?.data?.detail || "Signup Failed");
    }
  };

  // 4. Loading State
  if (loading) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Verifying Session...</h2>
      </div>
    );
  }

  // 5. Auth Gate: If not logged in, show Auth Screen
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f9" }}>
        <div style={{ width: "100%", maxWidth: "550px", background: "white", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          {showLogin ? (
            <LoginForm 
              onSubmit={handleLoginSubmit} 
              onToggleForm={() => setShowLogin(false)} 
            />
          ) : (
            <SignupForm 
              onSubmit={handleSignupSubmit} 
              onToggleForm={() => setShowLogin(true)} 
            />
          )}
        </div>
        <Toaster position="top-right" />
      </div>
    );
  }

  // 6. Protected App: If logged in, show the full application
  return (
    <>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: { borderRadius: "12px", fontWeight: "600" },
        }}
      />

      <Suspense
        fallback={
          <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 500 }}>
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Catch all: redirect to home if route not found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;