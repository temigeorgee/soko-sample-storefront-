import React from 'react';
import Cart from '../component/Cart/Cart';
import Header from '../component/Header/Header';
import MinHeader from '../component/Header/MinHeader';

function CartPages(props) {
  return (
    <>
      <div className="cart-pages-container">
        <div className="min-header">
          <MinHeader />
        </div>
        <div className="header">
          <Header totalItems={props.cart.total_items} />
        </div>
        <Cart
          cart={props.cart}
          handleUpdateCartQuantity={props.handleUpdateCartQuantity}
          handleRemoveFromCart={props.handleRemoveFromCart}
          handleEmptyCart={props.handleEmptyCart}
        />
      </div>
    </>
  );
}

export default CartPages;
