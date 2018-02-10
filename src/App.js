import React, { Component } from 'react';
import VegiesItems from './Components/VegiesItems/VegiesItems'


class App extends Component {
  render() {
    return(
      <div className='App'>
        App Main Page
        
        <VegiesItems />
        
      </div>
    )
  }
}

export default App;