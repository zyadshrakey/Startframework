import React, { Component } from "react";
import "./footer.css";

export default class extends Component {
  render() {
    return (
      <>
        <footer className="container-fluid  p-0  ">
          <div className="row justify-content-center align-items-center g-2 p-4">
            <div className="col-md-4 text-white text-center">
              <h2>LOCATION</h2>
              <h6>2215 John Daniel Drive</h6>
              <h6>Clark, MO 65243</h6>
            </div>
            <div className="col-md-4 text-white text-center ">
              <h2>AROUND THE WEB</h2>
              <i className="fa-brands fa-facebook mx-1 icon"></i>
              <i className="fa-brands fa-twitter mx-1 icon"></i>
              <i className="fa-brands fa-linkedin mx-1 icon"></i>
              <i className="fa-brands fa-youtube mx-1 icon"></i>
            </div>
            <div className="col-md-4 text-white text-center">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
          <div className="container-fluid bg-dark text-center">
            <p className="text-white  m-0 p-3">
              Copyright © Ahmed Elshahat 2023
            </p>
          </div>
        </footer>{" "}
      </>
    );
  }
}
