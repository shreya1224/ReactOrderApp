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
          console.log("Customer data updated successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      customerService
        .create(customer)
        .then((response) => {
          console.log("Customer added successfully", response.data);
          navigate("/");
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
      <h3>Add/Update Customer</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="caddress"
            value={caddress}
            onChange={(e) => setCaddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div>
          <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddCustomer;