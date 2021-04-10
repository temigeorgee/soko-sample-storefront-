import Cart from '../component/Cart/Cart';
import Category from '../component/Categories/Category';
import Header from '../component/Header/Header';
import MinHeader from '../component/Header/MinHeader';
import Products from '../component/Product/Products';
import '../styles.css';
import { commerce } from '../lib/commerce';
import { useEffect, useState } from 'react';
function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(setCart, 'main cart');
  return (
    <div className="main-products">
      <div className="min-header">
        <MinHeader />
      </div>
      <div className="header">
        <Header totalItems={cart.total_items} />
      </div>
      <div className="categories">
        <Category />
      </div>
      <div className="items">
        <Products products={products} onAddToCart={handleAddToCart} />
      </div>
      <div className="bag">
        <Cart totalItems={cart.total_items} cart={cart} />
      </div>
      <div className="product offer">89</div>
      <div className="product footer">90</div>
    </div>
  );
}
export default Home;
