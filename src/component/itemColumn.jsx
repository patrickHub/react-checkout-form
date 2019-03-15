import React, { Component } from "react";
import imageJeanDroite from "./imageJeanDroite.jpg";

class ItemColumn extends Component {
  state = {};

  render() {
    return (
      <div className="col-md-4">
        <img
          src={
            "http://localhost:8082/api/products/images?path=" +
            this.props.item.imagePath
          }
          alt=""
          className="img-fluid d-block mx-auto mb-2"
        />
        <p className="pl-2 my-0">
          <strong>CHF {this.props.item.price}.00</strong>
        </p>
        <p className="pl-2 my-0">{this.props.item.name}</p>
        <p className="pl-2 my-0">{this.props.item.brand}</p>
      </div>
    );
  }
}

export default ItemColumn;
