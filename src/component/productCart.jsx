import React, { Component } from "react";
import Product from "./product";

class ProductCart extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "Product 1 Description",
        price: 12
      },
      {
        id: 2,
        name: "Product 2",
        description: "Product 2 Description",
        price: 15
      },
      {
        id: 3,
        name: "Product 3",
        description: "Product 3 Description",
        price: 25
      },
      {
        id: 4,
        name: "Product 4",
        description: "Product 4 Description",
        price: 5
      }
    ]
  };

  totalAmount() {
    let total = 0;
    this.state.products.map(product => (total += product.price));
    return total;
  }

  render() {
    return (
      <div className="col-md-4 order-md-2 mb-5">
        <h4 className="d-flex justify-content-between align-item-center mb-3">
          <spam className="text-muted">Your cart products</spam>
          <span className="badge badge-secondary badge-pill">
            {this.state.products.length}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {this.state.products.map(product => (
            <Product product={product} />
          ))}
          <li className="list-group-item d-flex justify-content-between bg-light">
            <span className="text muted">Livraison</span>
            <span className="text-success">Gratuite</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <span className="text-muted">Total (TTC)</span>
            <span className="text-muted">
              <strong>CHF {this.totalAmount()}.00</strong>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductCart;
