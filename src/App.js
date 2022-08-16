import React from "react";

import '../src/scss/style.scss'
import Categories from "./components/Categories";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Content />
      <Footer />
    </div>  
  );
}

export default App;
