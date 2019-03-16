import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav bg-write justify-content-center">
          <a class="nav-link active" href="#">
            <h4 className="text-dark">My E-MARKET</h4>
          </a>
        </nav>
        <nav className="nav navbar-light border bottom bg-success justify-content-center">
          <span className="text-light text-bold text-uppercase text-md py-2">
            ENJOIY AN EXTRA 40% OFF SALE STYLES
          </span>
        </nav>
        <ul class="nav justify-content-center border bottom shadow">
          <li class="nav-item mx-5">
            <a class="nav-link active text-bold text-dark" href="#">
              HOME
            </a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link active text-bold text-dark" href="#">
              MEM
            </a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link active text-bold text-dark" href="#">
              WOMEN
            </a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link active text-bold text-dark" href="#">
              KIDS
            </a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link active text-bold text-dark" href="#">
              BABY
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
