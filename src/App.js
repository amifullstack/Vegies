import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import VegiesItems from './Components/VegiesItems/VegiesItems'
import Home from './Components/Home/Home';



class App extends Component {
  render() {
    return(
      <div className='App'>
        App Main Page

        <Router>
          <div>
            <ul>
            <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/vegies'>Vegies</Link>
              </li>
            </ul>          
          <hr/>
          <Route path="/" component={Home} />
          <Route path="/vegies" component={VegiesItems}/>
          </div>
        </Router>     
        
      </div>
    )
  }
}

export default App;