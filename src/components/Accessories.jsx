import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const init = () => {
    ProductService.getAll()
      .then((response) => {
        console.log("Printing Products", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    ProductService.remove(id)
      .then((response) => {
        console.log("Product has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h3>List of Products</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Product name</th>
              <th> Price</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.pname}</td>
                <td>{product.price}</td>

                <td>
                  <Link
                    className="btn btn-info"
                    to="/buy"
                  >
                    Buy
                  </Link>

                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
