import React from "react";
import { useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Componant/Home";
import ProductDetails from "./assets/Componant/ProductDetails";

function App() {
  
  return(
    <>
    <Routes>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/products/:id" element={<ProductDetails />}></Route>
    </Routes>
    </>
  )

}

export default App