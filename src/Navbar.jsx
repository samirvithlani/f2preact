import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./product/ProductContext";

export const Navbar = () => {
  const {sharedData} = useContext(ProductContext)
  var cartStyle = {
    position: "relative",
    right: "0px",
    top: "0px",
    height: "50px",
    width: "100px",
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/emplist">
          EMPLOYEE LIST
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/aboutemp">
                ABOUT EMP <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contactemp">
                CONTACT EMP
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                apidemo3
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/apidemo4">
                apidemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo5">
                apidemo5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo6">
                apidemo6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/count">
                count
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/weatherapp">
                weatherapp
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/students">
                students
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                login
              </Link>
            </li>
          </ul>
          <Link style={cartStyle} to="cart">
            {sharedData?.length}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
};
