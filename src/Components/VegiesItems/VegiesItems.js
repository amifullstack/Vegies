import React, { Component } from 'react';
import pid from 'uuid';

import Vegies from '../Vegies/Vegies';
import AddVegiesItems from '../AddVegiesItems/AddVegiesItems';


class VegiesItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegiesItems:[]
    }
  }

  // Api Call here
  componentDidMount() {
    this.setState({
      vegiesItems: [
        {
          id: pid.v4(),
          product: 'Capsicum',
          priceperKg: 20,
          mafedDate: '12-12-1999'
        },
        {
          id: pid.v4(),
          product: 'Capsicum2',
          priceperKg: 200,
          mafedDate: '12-12-2000'
        }
      ]
    })
  }

  handleAddProduct(product) {
    // get current state
    let vegiesItems = this.state.vegiesItems;

    // Push new state to current
    vegiesItems.push(product);

    // Not done yet stateState
    this.setState( { vegiesItems: vegiesItems})

  }

  handleDeleteProduct(id) {
    // get current state
    let vegiesItems = this.state.vegiesItems;

    // match current state id and received is
    let index = vegiesItems.findIndex(x => x.id == id)

    // Remove
    vegiesItems.splice(index, 1)

    // set/reset state
    this.setState({ vegiesItems: vegiesItems})

  }

  render() {
    
    return(
      <div className="vegiesitems">
        <h3>Items</h3>
        {/* AddVegiesItems From */}
        <AddVegiesItems addProduct={(product) => this.handleAddProduct(product)}/>

        {/* send state */}
        <Vegies vegiesItems={this.state.vegiesItems} onDelete={(id) => this.handleDeleteProduct(id)} />
        
      </div>
    )
  }
}

export default VegiesItems;