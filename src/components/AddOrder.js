import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderService from "../services/OrderService";

const AddOrder = () => {
  const [odate, setOdate] = useState("");
  const [cust, setCust] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pro_id, setPro] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrder = (o) => {
    o.preventDefault();
    const order = { odate, cust,pro_id, quantity, id};


      // create
      OrderService.create(order)
        .then((response) => {
            alert("Order placed")
          console.log("Product has been added successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });

  };

  useEffect(() => {
    if (id) {
      OrderService.get(id)
        .then((order) => {
          setOdate(order.data.odate);
          setCust(order.data.cust);
          setPro(order.data.pro_id);
          setQuantity(order.data.quantity);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Place Your Order</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="odate"
            value={odate}
            onChange={(o) => setOdate(o.target.value)}
            placeholder="Enter Date"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="cust"
            value={cust}
            onChange={(o) => setCust(o.target.value)}
            placeholder="Enter Customer Id"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="pro_id"
            value={pro_id}
            onChange={(o) => setPro(o.target.value)}
            placeholder="Enter Product Id"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="quantity"
            value={quantity}
            onChange={(o) => setQuantity(o.target.value)}
            placeholder="Enter Quantity"
          />
        </div>
        <div>
          <button onClick={(o) => saveOrder(o)} className="btn btn-primary">
            Place Order
          </button>
        </div>
      </form>
      <hr />
      <Link to="/store/accessories">Back to List</Link>
    </div>
  );
};

export default AddOrder;
