import React, { Component } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import DescriptionText from "./component/descriptionText";
import ProductChart from "./component/productCart";
import BillingAdress from "./component/billingAdress";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <DescriptionText />
          <ProductChart />
          <BillingAdress />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
