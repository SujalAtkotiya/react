import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./Products";
import Productsadd from "./Productadd";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:id" element={<ProductDetail />}></Route>
        <Route path="/Products/add" element={<Productsadd />}></Route>
        <Route path="/Products/edit/:id" element={<Productsadd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
