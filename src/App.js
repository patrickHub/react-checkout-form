import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import DescriptionText from "./component/descriptionText";
import "./App.css";
import Items from "./component/items";

class App extends Component {
  render() {
    return (
      <div>
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
            <Link to="/">HOME</Link>
          </li>
          <li class="nav-item mx-5">
            <Link to="/men">MEN</Link>
          </li>
          <li class="nav-item mx-5">
            <Link to="/women">WOMEN</Link>
          </li>
          <li class="nav-item mx-5">
            <Link to="/kid">KIDS</Link>
          </li>
          <li class="nav-item mx-5">
            <Link to="/baby">BABY</Link>
          </li>
        </ul>

        <main className="container-fluid bg-white">
          <DescriptionText />
          <Route path="/" exact component={Items} />
          <Route path="/men" component={Items} />
          <Route path="/women" component={Items} />
          <Route path="/kid" component={Items} />
          <Route path="/baby" component={Items} />
        </main>
        <Footer />
      </div>
    );
  }
}

/*<div className="row">
            <ProductChart />
            <BillingAdress />
          </div> */

export default App;
