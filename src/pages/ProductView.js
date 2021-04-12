import { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import '../component/Product/Product.css';
import Header from '../component/Header/Header';
import MinHeader from '../component/Header/MinHeader';
import { Link } from 'react-router-dom';
import Offer from '../component/Offer/Offer';
import Footer from '../component/Footer/Footer';
function ProductView({ handleAddToCart, cart }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchProductsById = async (id) => {
    const {
      name,
      quantity,
      media,
      description,
      price,
    } = await commerce.products.retrieve(id);
    setProduct({
      id,
      name,
      quantity,
      src: media.source,
      description,
      price: price.formatted_with_symbol,
    });
  };
  useEffect(() => {
    const id = window.location.pathname.split('/');
    fetchProductsById(id[2]);
  });
  // const handleQty = (param) => {
  //   if (param === 'decrease' && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  //   if (param === 'increase' && quantity < 10) {
  //     setQuantity(quantity + 1);
  //   }
  // };

  return (
    <>
      <div className="min-header">
        <MinHeader />
      </div>
      <div className="header">
        <Header totalItems={cart.total_items} />
      </div>
      <div className="container">
        <div className="product-container">
          <div className="col-4">
            <div className="product-image">
              <img src={product.src} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="product-name">
              <h4>{product.name}</h4>
              <br />
              <p>{product.description}</p>
            </div>
            <br />
            <h3 className="product-price">{product.price}</h3>
            <br />
            <div className="cart-quantity product-quantity">
              <button type="button" className="btn-quantity">
                -
              </button>
              <p>1</p>
              <button type="button" className="btn-quantity">
                +
              </button>
            </div>
            <div className="product-btns">
              <button
                type="submit"
                className="btn btn-add btn-tocart"
                onClick={() => handleAddToCart(product.id, 1)}
              >
                add to bag
              </button>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <button type="button" className="btn btn-home btn-buynow">
                  buy now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="offer">
        <Offer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default ProductView;
