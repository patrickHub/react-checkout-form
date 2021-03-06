import React, { Component } from "react";
import ItemColumn from "./itemColumn";

class ItemLine extends Component {
  state = {
    itemLine: this.props.itemLine
  };
  render() {
    return (
      <div className="row mb-5">
        {this.state.itemLine.map(item => (
          <ItemColumn item={item} />
        ))}
      </div>
    );
  }
}

export default ItemLine;
