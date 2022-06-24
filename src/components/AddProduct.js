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
          alert("Product Saved");
          console.log("Product has been added successfully", response.data);
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
      <form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="prhead">Add/Update Product</h3>
        <br></br>
        <br></br>
        <div className="form-group">
          <p className="prsub">Product Name:</p>
          <input
            type="text"
            className="form-control col-4"
            id="pname"
            value={pname}
            onChange={(o) => setPname(o.target.value)}
            placeholder="Enter Product Name"
          />
        </div>

        <br></br>
        <div className="form-group">
          <p className="prsub">Product Price:</p>
          <input
            type="text"
            className="form-control col-4"
            id="price"
            value={price}
            onChange={(o) => setPrice(o.target.value)}
            placeholder="Enter Price"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <button onClick={(o) => saveProduct(o)} className="btn " id="svep">
            Save
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <Link to="/prodlist" id="bck">
        Back to List
      </Link>
    </div>
  );
};

export default AddProduct;
