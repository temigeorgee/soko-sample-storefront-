import React from 'react';

function CartItems({ item }) {
  return (
    <>
      <div className="container">
        <div className="cart-container">
          <div className="cartmedia">
            <img src={item.media.source} alt={item.name} />
          </div>
          <div className="cartcontent">
            <h4 className="productname">{item.name}</h4>
            <div className="cart-quantity">
              <button className="btn-quantity">+</button>
              <p>{item.quantity}</p>
              <button className="btn-quantity">-</button>
            </div>
            {/* <h5>{item.line_total.formatted_with_symbol}</h5> */}
          </div>
          <div className="cart-right">
            <div className="cart-remove">
              <button>remove</button>
            </div>
            <div className="product-total">
              <h5>{item.line_total.formatted_with_symbol}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
