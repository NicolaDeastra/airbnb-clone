import React from "react";

import Home from "./components/pages/Home/Home";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
