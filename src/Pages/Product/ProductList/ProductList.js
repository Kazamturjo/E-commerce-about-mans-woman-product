import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Productlist.css";
const ProductList = () => {
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        // Slice the first 4 images from the fetched data
        setImages(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);
  console.log(images,"imagesssssss");
  //  const addToCart=(images)=>{
  //   images.quantity=1

  //   setCart(prev=>[...prev,images])
  //  }
  return (
    <div className="image-gallery">
      {images.map((product, index) => (
        <Link to={`/product/${product.id}`} key={index} className="card-link">
          <div className="image-card">
            <img
              src={product.image}
              alt={product.description}
              className="card-image"
            />
            <div className="card-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
          {/* <button onClick={()=>addToCart(images)}>Add to cart</button> */}
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
