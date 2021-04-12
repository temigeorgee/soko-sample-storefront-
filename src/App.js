import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import CartPages from './pages/CartPages';
import ProductView from './pages/ProductView';

export default function App() {
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
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    // setCart({ cart });
  };
  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    // setCart(response.cart)
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    // setCart(response.cart)
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    // setCart(response.cart)
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  // console.log(products, 'main procd soko');
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home
            product={products}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleUpdateCartQuantity={handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path="/cart">
          <CartPages
            product={products}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleUpdateCartQuantity={handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path="/product-details/:id">
          <ProductView
            // product={products}
            cart={cart}
            handleAddToCart={handleAddToCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}
