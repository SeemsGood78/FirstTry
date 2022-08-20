import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/scss/style.scss'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const [searchValue, setSearhcValue] = useState('')

  return (
    <BrowserRouter>
      <Header searchValue={searchValue} setSearhcValue={setSearhcValue} />
      <Routes >
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
