import React, { Component } from "react";
import axios from "axios";
import ItemLine from "./itemLine";

class Items extends Component {
  state = {
    items: [],
    isLoading: true
  };

  organiseItems(itemsArray) {
    const length = itemsArray.length;
    let newArray = [];
    let k = 0;

    for (var i = 0; i < length; i += 3) {
      let lineArray = [];
      for (var j = 0; j < 3 && i + j < length; j++) {
        lineArray[j] = itemsArray[i + j];
      }
      newArray[k] = lineArray;
      k++;
    }
    // create a new State object without mutating the original State object
    const newState = Object.assign({}, this.state, {
      items: newArray,
      isLoading: false
    });
    // Store the new state object in the component'state
    this.setState(newState);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/products")
      .then(response => {
        console.log(response.data);
        this.organiseItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <main className="container-fluid bg-white">
        <div>
          {!this.state.isLoading ? (
            this.state.items.map(array => {
              return (
                <ItemLine
                  itemLine={array.filter(
                    item =>
                      this.props.match.url === "/" ||
                      "/" + item.category === this.props.match.url
                  )}
                />
              );
            })
          ) : (
            <p className="lead">Loading...</p>
          )}
        </div>
      </main>
    );
  }
}

export default Items;
