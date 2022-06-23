import React from "react";
import "./style.css";
function About() {
  return (
    <div>
      <section>
        {/* <div className="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-auto">
                <h4>About Us</h4>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline">
            <p>*******Tag Line******</p>
          </div>
        </div>
      </section>
      <div class="grid">
        <div class="item">
          <br></br>
          <u>Our Vision</u>
          <br></br>
          <br></br>
          <p class="para">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="item">
          <br></br>
          <u>Our Mision</u>
          <br></br>
          <br></br>
          <p class="para">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="item">
          <br></br>
          <u> Our Core Values</u>
          <br></br>
          <br></br>
          <p class="para">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
