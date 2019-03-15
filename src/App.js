import React, { Component } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import DescriptionText from "./component/descriptionText";
import "./App.css";
import Items from "./component/items";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container bg-white">
          <DescriptionText />
          <Items />
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
