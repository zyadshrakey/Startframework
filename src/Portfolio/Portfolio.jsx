import React, { Component } from "react";
import "./portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center p-4 m-0">PORTFOLIO COMPONENT</h1>
          <div className="total-lines d-flex justify-content-center  align-items-center m-0">
            <div className="line-before"></div>
            <i className="fa-solid fa-star  m-4 "></i>
            <div className="line-after"></div>
          </div>
          <div class="row justify-content-center align-items-center g-4 p-4 ">
            <div className="col-md-4 item position-relative p-0">
              <img
                src={require("../img/poert1.png")}
                alt=""
                className="w-100 "
              />
              <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative p-0">
              <img
                src={require("../img/port2.png")}
                alt=""
                className="w-100 "
              />
              <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative p-0">
              <img
                src={require("../img/port3.png")}
                alt=""
                className="w-100 "
              />
              <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative p-0">
              <img
                src={require("../img/poert1.png")}
                alt=""
                className="w-100 "
              />
              <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative p-0">
              <img
                src={require("../img/port2.png")}
                alt=""
                className="w-100 "
              />
              <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className="col-md-4 item  p-0 position-relative">
              <div className=" ">
                <img
                  src={require("../img/port3.png")}
                  alt=""
                  className="w-100 "
                />
                <div className="layer text-white  w-100 h-100 opacity-75 position-absolute top-0 d-flex justify-content-center align-items-center ">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
