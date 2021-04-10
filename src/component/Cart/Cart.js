import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lottie.json';
import './Cart.css';
import Animatedimage from './AnimatedImage';
import CartItems from './CartItems';
function Cart({ totalItems, cart }) {
  console.log(cart, 'my cart');
  const isEmpty = !cart.line_items.length;
  const EmptyCart = () => (
    <>
      <Animatedimage />
      <div className="empty-cart">
        <h3> It's empty here</h3>
        <p>Start shopping to add items to your bag</p>
      </div>
    </>
  );
  const FullCart = () => (
    <>
      <div className="container">
        {cart.line_items.map((item) => {
          <div className="container" key={item.id}>
            <CartItems item={item} />
          </div>;
        })}

        <div className="cardDetials">
          <h4>
            subtotal :{cart.subtotal_formatted_with_symbol}
            <button type="button" className="btn">
              empty cart
            </button>
            <button type="button" className="btn">
              checkout
            </button>
          </h4>
        </div>
      </div>
    </>
  );
  return (
    <>
      <br />
      <h2 className="category-title">
        Bag <span className="total-cart-num">{totalItems}</span>
      </h2>
      {isEmpty ? <EmptyCart /> : <FullCart />}
    </>
  );
}

export default Cart;
