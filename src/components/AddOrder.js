import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderService from "../services/OrderService";

const AddOrder = () => {
  const [odate, setOdate] = useState("");
  const [cust, setCust] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pro_id, setPro] = useState("");
  // const [pname, setPname] = useState("");
  // const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrder = (o) => {
    o.preventDefault();

    const order = { odate, cust, pro_id, quantity, id };

    // create
    OrderService.create(order)
      .then((response) => {
        alert("Order placed");
        console.log("Product has been added successfully", response.data);
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
          // setPname(order.data.pname);
          // setPrice(order.data.price);
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
      <br></br>
      <br></br>
      <br></br>
      <h3 className="ab"><b><u>Place Your Order</u></b></h3>

      <form className="form1">
        <div className="form-group" id="ab1">
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
            type="text"
            className="form-control col-4"
            id="quantity"
            value={quantity}
            onChange={(o) => setQuantity(o.target.value)}
            placeholder="Enter Quantity"
          />
        </div>
        <div>
          <button onClick={(o) => saveOrder(o)} className="btn2 ">
            Place Order
          </button>
          <Link to="/store/accessories"><button className="btn3">Back to List</button></Link>
        </div>
        
      
      </form>
     
    </div>
  );
};

export default AddOrder;
