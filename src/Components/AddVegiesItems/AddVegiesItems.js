import React, { Component } from 'react';
import pid from 'uuid'

class AddVegiesItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProducts:{}
    }
  }

  // static producs // api later
  static defaultProps = {
    products: ['Capsicum', 'Carrot', 'Cucumber', 'Onion', 'Cabbage', 'Garlic', 'Okra']
  }

  // handleSubmit
  handleSubmit(e) {
    if (this.refs.price.value === '') {
      alert('Price is require')
    } else {
      this.setState({
        newProducts: 
          {
            id: pid.v4(),
            product: this.refs.product.value,
            priceperKg: this.refs.price.value,
            mafedDate: this.refs.date.value,
          }}, () => {
            // pass state to main/parent as props
            this.props.addProduct(this.state.newProducts)    
          });
    }
    e.preventDefault();
  }
  
  
  


  // AddVegiesItemsForm
  _AddVegiesItemsForm() {

    // product will fetch from API
    let productOption = this.props.products.map(product => {
      return(        
          <option>{product}</option>        
      )
    })      
    
      return(
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Select Prduct</label><br/>
            <select ref="product"><br/>
              {productOption}
            </select><br/>
  
            <label>Price</label><br/>
            <input type="text" ref="price"/><br/>
  
            <label>MfdDate</label><br/>
            <input type="date" ref="date"/><br/><br/>
            <input type="submit" value="Submit"/><br/><br/>
  
          </form>
        </div>
      )
    
    
  }
  render() {
   
    return(
      <div>
        {this._AddVegiesItemsForm()}
      </div>
    )
  }
}
export default AddVegiesItems;