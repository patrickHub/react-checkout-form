import React, { Component } from "react";
import logo from "../logo.png";

const DescriptionText = () => {
  return (
    <div className="py-5 text-center">
      <img
        src={logo}
        alt=""
        className="d-block mx-auto mb-4 w-5 h-5"
        style={{ width: "72px", height: "72px" }}
      />
      <h2>Checkout from</h2>
      <p className="lead">
        Below is an example form to show how we can compose multiples React
        Components to build a responsible and beautifull user interface. Each
        Component is entirely independant and reusable.
      </p>
    </div>
  );
};

export default DescriptionText;
