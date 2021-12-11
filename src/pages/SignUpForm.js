import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      news: false,
      validate: 0,
      anew: "",
      email: "",
      password: "",
      name: "",
      address: "",
      hasAgreed: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    if (target.name === "reenter") {
      this.setState({ anew: target.value });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit = (e) => {
    if (this.state.name === "") {
      alert(" Cannot leave name empty ");
      this.setState({ validate: 1 });
      e.preventDefault();
      return false;
    }

    if (this.state.anew !== this.state.password) {
      alert(" Passwords dont match ");
      this.setState({ validate: 1 });
      e.preventDefault();
      return false;
    }
    if (this.state.password.length < 6) {
      alert("Passwords must be above 6 characters long");
      this.setState({ validate: 1 });
      e.preventDefault();
      return false;
    }

    if (this.state.validate === 0) {
      let pwd = this.state.password;
      let pwdcheck = 0;
      for (let i = 0; i < pwd.length; i += 1) {
        if (pwd[i].toUpperCase() === pwd[i]) {
          pwdcheck += 1;
          break;
        }
        if (pwdcheck === 0) {
          alert("Needs to have at least 1 caps character ");
          e.preventDefault();
          return false;
        }
      }
    }

    if (!this.state.hasAgreed) {
      alert("Please accept T&C");
      e.preventDefault();
      return false;
    }
    if (this.state.validate === 0) {
      let ans = prompt("Tell the sum of 5 and 9 ");
      if (ans !== 14) {
        alert("cAPTCHA failed ");
        this.setState({ validate: 1 });
        e.preventDefault();
        return false;
      }
    } else {
      alert("You have submitted the form");
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="reenter">
              Confirm Password
            </label>
            <input
              type="password"
              id="reenter"
              className="formFieldInput"
              placeholder="Re Enter the password for confirmation "
              name="reenter"
              value={this.state.anew}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="address">
              Address
            </label>
            <textarea
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter your address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="address">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="News"
                value={this.state.news}
                onChange={this.handleChange}
              />{" "}
              Check to recieve updates about your favourite library{" "}
            </label>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={this.handleSubmit}>
              Sign Up
            </button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
