import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Import the CSS file

function Signup() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProduct(response.data.products);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-container">
      {product.map(prod => (
        <div key={prod.id} className="product-card">
            <p className='discount'>{prod.discountPercentage}%</p>
          <img src={prod.images[0]} alt={prod.title} />
          <p className="product-title">{prod.title}</p>
          <p>Price: {prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Signup;
