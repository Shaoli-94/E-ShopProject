import React from 'react';

class Product extends React.Component {
  render() {
    return <li>
            <h3>{this.props.item.code}</h3>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
            <p>{this.props.item.price}</p>
			<button onClick={() => this.props.addToCartHandler(this.props.item)}>Add to cart</button>
			<hr/>
          </li>;
  }
}

export default Product;