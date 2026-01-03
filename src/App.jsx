import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { setActivePage } from "./redux/slices/navigationSlice";

import Header from "./components/CommonComponents/Header";
import Footer from "./components/CommonComponents/Footer";
import CartPage from "./components/Pages/Cart/CartPage";
import ContactPage from "./components/Pages/Contact/ContactPage";


const Home = lazy(() => import("./components/Pages/Home/Home"));
const MenuPage = lazy(() => import("./components/Pages/Menu/MenuComponents"));
const ServicePage = lazy(() => import("./components/Pages/Services/ServicePage"));
const OfferPage = lazy(() => import("./components/Pages/Offers/OffersPage"));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") dispatch(setActivePage("home"));
    else if (path.includes("menu")) dispatch(setActivePage("menu"));
    else if (path.includes("services")) dispatch(setActivePage("services"));
    else if (path.includes("offers")) dispatch(setActivePage("offers"));
  }, [location, dispatch]);

  return (
    <>

      <Header />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "12px",
            fontWeight: "600",
          },
        }}
      />

      {/* Suspense wraps only what is lazy-loaded */}
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
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
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
