import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductList from "./Pages/Product/ProductList/ProductList";
import ProductID from "./Pages/Product/ProductList/ProductID/ProductID";
import ProductDetails from "./Pages/Product/ProductList/ProductID/Productsdelailts/ProductDetails";
import ProductPricing from "./Pages/Product/ProductList/ProductID/ProductPricing/ProductPricing";
import ContactList from "./Pages/Contact/ContactMap/ContactList/ContactList";
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import Order from "./component/PlacedOrder/Order";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="kazam" element={<ContactList />} />
          <Route
            path="cart"
            element={
              <Cart
                
                updateCartCount={updateCartCount}
              />
            }
          />
          <Route path="/order" element= {<Order/>}/>

          <Route
            path="product/:id"
            element={<ProductID />}
          >
            <Route index element={<ProductDetails />} />
            <Route path="pricing" element={<ProductPricing />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
