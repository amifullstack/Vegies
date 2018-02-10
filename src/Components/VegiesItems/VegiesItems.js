import React, { Component } from 'react';
import pid from 'uuid';

import Vegies from '../Vegies/Vegies';


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

  render() {   
    
    return(
      <div className="vegiesitems">
        <h3>Items</h3>
        <Vegies vegiesItems={this.state.vegiesItems} />     
        
      </div>
    )
  }
}

export default VegiesItems;