import React, { Component } from "react";
import "./style-blog.css";
import "./App-blog.css";

class Posts extends Component {
  handleSubmit = e => {
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
      alert("Successfully logged in");
      e.target.user.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to loggin page");
  };

  render() {
    return (
      <div className="App">
        
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="user">USER NAME</label>
            <input type="user" name="user" placeholder="user/admin" />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="password"/>
          </div>
          <button className="primary">LOGIN</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          BACK
        </button>
      </div>
    );
  }
}

export default Posts;