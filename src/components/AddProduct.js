import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const AddProduct = () => {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveProduct = (o) => {
    o.preventDefault();
    const product = { pname, price, quantity, id };

    if (id) {
      //update
      ProductService.update(product)
        .then((response) => {
          console.log("Product data updated successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      ProductService.create(product)
        .then((response) => {
          console.log("Product has been added successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      ProductService.get(id)
        .then((product) => {
          setPname(product.data.pname);
          setPrice(product.data.price);
          setQuantity(product.data.quantity);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add/Update Product</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="pname"
            value={pname}
            onChange={(o) => setPname(o.target.value)}
            placeholder="Enter Product Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="price"
            value={price}
            onChange={(o) => setPrice(o.target.value)}
            placeholder="Enter Price"
          />
        </div>

        <div>
          <button onClick={(o) => saveProduct(o)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddProduct;
