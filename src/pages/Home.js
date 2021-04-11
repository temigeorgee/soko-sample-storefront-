import Cart from '../component/Cart/Cart';
import Category from '../component/Categories/Category';
import Header from '../component/Header/Header';
import MinHeader from '../component/Header/MinHeader';
import Products from '../component/Product/Products';
import '../styles.css';
import { commerce } from '../lib/commerce';
// import { useEffect, useState } from 'react';
import Offer from '../component/Offer/Offer';
import Footer from '../component/Footer/Footer';
function Home(props) {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };
  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };
  // const handleAddToCart = async (productId, quantity) => {
  //   const { cart } = await commerce.cart.add(productId, quantity);
  //   setCart(cart);
  //   // setCart({ cart });
  // };
  // const handleUpdateCartQuantity = async (productId, quantity) => {
  //   const { cart } = await commerce.cart.update(productId, { quantity });
  //   // setCart(response.cart)
  //   setCart(cart);
  // };
  // const handleRemoveFromCart = async (productId) => {
  //   const { cart } = await commerce.cart.remove(productId);
  //   // setCart(response.cart)
  //   setCart(cart);
  // };
  // const handleEmptyCart = async () => {
  //   const { cart } = await commerce.cart.empty();
  //   // setCart(response.cart)
  //   setCart(cart);
  // };
  // useEffect(() => {
  //   fetchProducts();
  //   fetchCart();
  // }, []);
  console.log(props.onAddToCart, 'mains cart');
  return (
    <div className="main-products">
      <div className="min-header">
        <MinHeader />
      </div>
      <div className="header">
        <Header totalItems={props.cart.total_items} />
      </div>
      <div className="categories">
        <Category />
      </div>
      <div className="items">
        <Products
          products={props.product}
          onAddToCart={props.handleAddToCart}
        />
      </div>
      <div className="bag">
        <Cart
          totalItems={props.cart.total_items}
          cart={props.cart}
          handleUpdateCartQuantity={props.handleUpdateCartQuantity}
          handleRemoveFromCart={props.handleRemoveFromCart}
          handleEmptyCart={props.handleEmptyCart}
        />
      </div>
      <div className="offer">
        <Offer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
