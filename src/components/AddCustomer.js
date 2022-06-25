import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import customerService from "../services/customer.service";

const AddCustomer = () => {
  const [cname, setCname] = useState("");
  const [caddress, setCaddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveCustomer = (e) => {
    e.preventDefault();

    const customer = { cname, caddress, id };

    if (id) {
      //update
      customerService
        .update(customer)
        .then((response) => {
          alert("Details updated Successfully");
          console.log("Customer data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      customerService
        .create(customer)
        .then((response) => {
          alert("Details Saved");
          console.log("Customer added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      customerService
        .get(id)
        .then((customer) => {
          setCname(customer.data.cname);
          setCaddress(customer.data.caddress);
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
        <h3 className="prhead">Add/Update Customer</h3>
        <br></br>
        <br></br>
        <div className="form-group">
          <p className="prsub">Customer Name:</p>
          <input
            type="text"
            className="form-control col-4"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <br></br>
        <div className="form-group">
          <p className="prsub">Customer Price:</p>
          <input
            type="text"
            className="form-control col-4"
            id="caddress"
            value={caddress}
            onChange={(e) => setCaddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <button onClick={(e) => saveCustomer(e)} className="btn " id="svep">
            Save
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <Link to="/user" id="bck">
        Back to List
      </Link>
    </div>
  );
};

export default AddCustomer;
