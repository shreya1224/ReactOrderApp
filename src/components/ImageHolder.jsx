import React from "react";

export default function ImageHolder() {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <img
            src={require("../static/5.png")}
            alt="image1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <img
            src={require("../static/6.png")}
            alt="image1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <img
            src={require("../static/7.png")}
            alt="image1"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}
