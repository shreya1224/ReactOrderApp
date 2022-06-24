import React, { Component } from "react";
import "./style-blog.css";
import "./App-blog.css";
import { useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.user.value);

    if (!e.target.user.value) {
      alert("Username is required");
    } else if (!e.target.user.value) {
      alert("Valid username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.user.value === "admin" &&
      e.target.password.value === "123456"
    ) {
      // alert("Successfully logged in");
      navigate("/admin");
      navigate(0);
      e.target.user.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    alert("Goes to login page");
  };

  // render()
  // {
  return (
    <div className="fbody">
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="user">USER NAME</label>
            <input type="user" name="user" placeholder="user/admin" />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button className="primary">LOGIN</button>
        </form>
        <button className="secondary" onClick={handleClick}>
          BACK
        </button>
      </div>
    </div>
  );
  //   }
}

export default Posts;
