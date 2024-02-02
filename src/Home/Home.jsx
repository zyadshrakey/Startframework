import { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className=" home">
        <div className="container-fluid d-flex justify-content-center  align-items-center">
          <div className="content">
            <img
              src={
                "https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
              }
              alt=""
            />
            <h3>START FRAMEWORK</h3>
            <div className="total-lines d-flex justify-content-center  align-items-center">
              <div className="line-before-home"></div>
              <i className="fa-solid fa-star star text-white m-4 "></i>
              <div className="line-after-home"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    );
  }
}
