import React, { useState, useEffect } from "react";
import { Link, useParams, NavLink, Outlet } from "react-router-dom";
import "./ProductID.css";
import axios from "axios";

const ProductID = () => {
  const [cart, setCart] = useState([]);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#161616",
  };
  const { id } = useParams();
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setCurrent(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      setCart(savedCartItems === null ? [] : savedCartItems);

  }, [id]);
  console.log(cart)

  const addToCart = (current) => {
   setCart((prev=>{
    const newCart =[...prev,current]
    localStorage.setItem('cartItems', JSON.stringify(newCart)); 
    return newCart
   }))

    

    
  };

  return (
    <>
      <div className="btn-add-container">
        <Link to="/products" relative="path" className="back-button">
          &larr;<span>Back to all products</span>
        </Link>

        <Link to="/cart" relative="path" className="Goto-button">
          <span>Go to cart →</span>
        </Link>
      </div>
      {current ? (
        <div className="ID-container">
          <div className="">
            <img
              src={current.image}
              style={{ width: "300px", margin: "20px" }}
            />
            <div className="host-van-detail-info-text">
              <i>{current.category}</i>
            </div>
          </div>
          <nav className="detail-nav">
            <NavLink
              to="."
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
          </nav>

          <div>
            <button onClick={() => addToCart(current)} className="add-btn">
              Add to Cart
            </button>
          </div>

          <Outlet context={{ current }} />
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default ProductID;
