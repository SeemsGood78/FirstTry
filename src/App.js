import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/scss/style.scss'
import '../src/scss/main.scss'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Reg from "./pages/Reg"
import LogIn from "./pages/LogIn";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
