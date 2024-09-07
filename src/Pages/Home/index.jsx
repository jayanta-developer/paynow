import React from 'react';
import "./style.css";



import productImg1 from "../../Assets/Images/2018-triumph-tiger-800-xca-adventure-motorcycle-offroad-7.jpg"
import productImg2 from "../../Assets/Images/8430358670792_1-1024x683.webp"

export default function Home() {
  return (
    <>
      <div className="homeContainer">

        <div className="productCard">
          <img src={productImg1} />
          <p>Product Title 1</p>
          <p>Price: 5</p>
          <button>Buy Now</button>
        </div>


        <div className="productCard">
          <img src={productImg2} />
          <p>Product Title 2</p>
          <p>Price: 6</p>
          <button>Buy Now</button>
        </div>




      </div>
    </>
  )
}
