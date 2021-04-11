import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lottie.json';
import './Cart.css';
import Animatedimage from './AnimatedImage';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
function Cart({
  totalItems,
  cart,
  handleUpdateCartQuantity,
  handleEmptyCart,
  handleRemoveFromCart,
}) {
  console.log(cart, 'my cart');
  const isEmpty = !cart.line_items;
  const EmptyCart = () => (
    <>
      <Animatedimage />
      <div className="empty-cart">
        <h3> It's empty here</h3>
        <p>Start shopping to add items to your bag</p>
      </div>
      <br />
      <Link to={'/home'} style={{ textDecoration: 'none' }}>
        <button
          type="button"
          className="btn btn-home"
          style={{
            margin: '0 auto',
            outline: 'none',
            backgroundColor: '#F8DE4B',
            color: '#fff',
            border: '1px solid #F8DE4B',
            transition: 'all .3s ease-out',
            cursor: 'pointer',
          }}
        >
          Go to Homepage
        </button>
      </Link>
      <br />
    </>
  );
  const FullCart = () => (
    <>
      {cart.line_items.map((item) => {
        return (
          <CartItems
            key={item.id}
            item={item}
            onUpdateCartQuantity={handleUpdateCartQuantity}
            onRemoveFromCart={handleRemoveFromCart}
          />
        );
      })}
      <div className="container">
        <h4 className="cart-subtotal">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </h4>
        <div className="cartDetials">
          <button
            type="button"
            className="btn btn-empty"
            onClick={handleEmptyCart}
          >
            empty cart
          </button>
          <button type="button" className="btn btn-checkout">
            checkout
          </button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'loading ...';
  // console.log(cart, 'items');
  return (
    <>
      <br />
      <h2 className="category-title">
        Bag <span className="total-cart-num">{totalItems}</span>
      </h2>
      <br />
      {!cart.line_items.length ? <EmptyCart /> : <FullCart />}
    </>
  );
}

export default Cart;
