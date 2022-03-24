import React from "react";

import Navbar from "./components/Navbar";
import Basics from "./pages/Basics";
import Advanced from "./pages/Advanced";
import LessUsed from "./pages/LessUsed";

import "./assets/basics.scss";

// here I used router v6 ,no switch ,only Routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Basics></Basics>}></Route>
        <Route path="/adv" element={<Advanced></Advanced>}></Route>
        <Route path="/less" element={<LessUsed></LessUsed>}></Route>
      </Routes>
    </div>
  );
}

export default App;
