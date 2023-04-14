import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import Header from "./Header";

function Main() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="col">
          <Link to="/page1">
            <div className="col1">
              <img src={img1} alt="Avatar" className="image1" />
              <div class="click">Click here</div>
            </div>
          </Link>
          <Link to="page2">
            <div className="col2">
              <img src={img2} alt="Avatar" className="image2" />
              <div class="click">Click here</div>
            </div>
          </Link>
          <Link to="page3">
            <div className="col3">
              <img src={img3} alt="Avatar" className="image3" />
              <div class="click">Click here</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
