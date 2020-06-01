import React from 'react';
import Header from './Header'
import Item from './Item'
import Cart from './Cart'
import './App.css';

class App extends React.Component {
  cartItemId = 0;

  state = {
    items: [],
    cartItems: [],
  }

  componentDidMount = () => {
    fetch(`https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({items: json})
      })
  }

  removeCartItem = (item) => {
    this.setState(prevState => ({      
      cartItems: prevState.cartItems.filter(cartItem => cartItem !== item)
    }))
  }
  
  addToCart = (item) => {
    this.cartItemId++;
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, {...item, id: this.cartItemId}]
    }))
  }

  render = () => {
    return (
      <>
        <Header />
        <main>
          <ul className="items">
            {this.state.items.map(item => (
              <Item key={item.id} item={item} addToCart={this.addToCart}/> 
            ))}
          </ul>
          <Cart cartItems={this.state.cartItems} removeCartItem={this.removeCartItem}/>            
        </main>        
      </>      
    )
  }
}

export default App;
