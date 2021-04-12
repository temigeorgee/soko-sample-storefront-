import Cart from '../component/Cart/Cart';
import Category from '../component/Categories/Category';
import Header from '../component/Header/Header';
import MinHeader from '../component/Header/MinHeader';
import Products from '../component/Product/Products';
import '../styles.css';
import Offer from '../component/Offer/Offer';
import Footer from '../component/Footer/Footer';
function Home(props) {
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
