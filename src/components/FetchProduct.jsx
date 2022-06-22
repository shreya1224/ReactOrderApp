import axios from "axios";
import React, { useState } from "react";

export default function FetchProduct() {
  const [products, setProducts] = useState([]);
  const [hideButton, setHideButton] = useState(false);
  const API = "http://localhost:8003/ams/";
  const getProducts = async () => {
    const response = await axios.get(API + "allproducts");
    console.log(response.data);
    setProducts(response.data);
    setHideButton(true);
    console.log(hideButton)
  };

  const hideButtonClick = ()=>{
    setHideButton(false);
  }
  return (
    <div className="container p-4">
      <div className="m-5 p-5">
        <button className="btn btn-success" onClick={getProducts}>
          Get Products
        </button>
        {products.length!==0 && hideButton ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.pname}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}

        {hideButton ? (
          <button className="btn btn-danger" onClick={hideButtonClick}>Hide data</button>
        ) : null}
      </div>
    </div>
  );
}
