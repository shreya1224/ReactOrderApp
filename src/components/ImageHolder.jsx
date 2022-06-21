import React from "react";
import { Link } from "react-router-dom";

export default function ImageHolder() {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
         <Link to="/store/women"><img
            src={require("../static/6.png")}
            alt="image1"
            className="img-fluid rounded"
          />
          </Link> 
        </div>
        <div className="col-lg-4 col-sm-12">
        <Link to="/store/men"><img

            src={require("../static/7.png")}
            alt="image1"
            className="img-fluid rounded"
          />
        </Link>
        </div>
        <div className="col-lg-4 col-sm-12">
          <Link to="/store/accessories"><img
            src={require("../static/8.png")}
            alt="image1"
            className="img-fluid rounded"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}
