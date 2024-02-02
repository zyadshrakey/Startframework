import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center p-4 m-0">Contact Section</h1>
          <div className="total-lines d-flex justify-content-center  align-items-center m-0">
            <div className="line-before"></div>
            <i className="fa-solid fa-star  m-4 "></i>
            <div className="line-after"></div>
          </div>
          <div class="mb-3 p-5">
            <input
              type="text"
              name=""
              id=""
              class="form-control mb-3"
              placeholder="userName"
              aria-describedby="helpId"
            />
            <input
              type="number"
              name=""
              id=""
              class="form-control mb-3"
              placeholder="userAge"
              aria-describedby="helpId"
            />
            <input
              type="email"
              name=""
              id=""
              class="form-control mb-3"
              placeholder="userEmail"
              aria-describedby="helpId"
            />
            <input
              type="password"
              name=""
              id=""
              class="form-control"
              placeholder="userpass"
              aria-describedby="helpId"
            />
            <button className="btn btn-outline-info">Send Message</button>
          </div>
        </div>
      </>
    );
  }
}
