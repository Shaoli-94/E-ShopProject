import React from 'react';

class CartItem extends React.Component {
  render() {
    return <li className="cart-item">
            <h3>{this.props.item.name} ({this.props.item.quantity})</h3>
            <p>Payable Amount: {this.props.item.amount}</p>
          

          </li>;
  }
}

export default CartItem;