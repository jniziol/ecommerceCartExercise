import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} removeCartItem={props.removeCartItem}/>
        ))}
      </ul>
      {props.cartItems.length > 0 && 
        <div className="total">Total: ${props.cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</div>
      }
      
    </aside>   
  );
}
