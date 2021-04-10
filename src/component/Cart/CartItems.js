import React from 'react';

function CartItems({ items }) {
  return (
    <>
      <div className="container">
        <div className="cardmedia">
          <img src={items.media.source} alt="" />
        </div>
      </div>
    </>
  );
}

export default CartItems;
