import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/scss/main.scss'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
