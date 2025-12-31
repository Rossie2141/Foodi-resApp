import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Pages/Home/Home";
import MenuPage from "./components/Pages/Menu/MenuComponents";
import ServicePage from "./components/Pages/Services/ServicePage";

import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setActivePage } from "./redux/slices/navigationSlice";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/offers" element={<h1>Hello Offers</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
