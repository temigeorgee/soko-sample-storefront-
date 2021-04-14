import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
function CartItems({ item, onRemoveFromCart, onUpdateCartQuantity }) {
  return (
    <>
      <div className="main-cart">
        <div className="cart-container">
          <Link
            to={`/product-details/${item.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="cart-image">
              <img src={item.media.source} alt="" className="product-img" />
              <h3 className="product-view">view</h3>
            </div>
          </Link>
          <div className="cartcontent">
            <h4 className="productname">{item.name}</h4>
            <div className="cart-quantity">
              <button
                type="button"
                className="btn-quantity"
                onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <p>{item.quantity}</p>

              <button
                type="button"
                className="btn-quantity"
                onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            {/* <h5>{item.line_total.formatted_with_symbol}</h5> */}
          </div>
          <div className="cart-right">
            <div className="cart-remove">
              <FaTrash
                onClick={() => onRemoveFromCart(item.id)}
                style={{ color: 'red', cursor: 'pointer' }}
              />
            </div>
            <div className="product-total">
              <h5>{item.line_total.formatted_with_symbol}</h5>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default CartItems;
