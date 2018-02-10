/*
  Main Vegies Content Page
*/

import React, { Component } from 'react';

class Vegies extends Component {
  constructor(props) {
    super(props);
  }

// Render Vegies Items
  _renderItems() {
    return Object.entries(this.props.vegiesItems).map(([key, value]) => {
      return(
        <div key={key}>
          <ul>
            
            <li>ID: {value.id}</li>
            <li>Product: {value.product}</li>
            <li>Price: {value.priceperKg}/Kg</li>
            <li>MafDate: {value.mafedDate}</li>
            <button>X</button>
          </ul>
        </div>
      )
    })
  }

  render() {   
    let items;
    if (this.props.vegiesItems) {
      items = this.props.vegiesItems.map((items) => items)
    }

    
    return(
      <div>
        <h3>Welcome to Vegies</h3>
        {this._renderItems()}       
        
      </div>
    )
  }
}
export default Vegies;