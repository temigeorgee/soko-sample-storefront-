import "./Product.css";
// import { products } from "../../pages/Data";
import Product from "./Product";

const Products = ({products, onAddToCart}) => {
  return (
    <div className="products">
      <div className="search">
        <form className="search-form">
          <input type="text" placeholder="Search for Product" />
          <input type="submit" value="&#x2315;" />
        </form>
      </div>
      <div>
        <br />
        <h2 className="category-title">Electronics</h2>
        {/* <h2>
          {props.current === "all"
            ? "All Categories"
            : props.current === "electronics"
            ? "Electronics"
            :  props.current === "faceMasks"
            ?"Face Masks"
          }
        </h2> */}
        {products.map((product) => (
          <div key={product.id}>
            <Product
            id={product.id}
              media={product.media.source}
              name={product.name}
              price={product.price.formatted_with_symbol}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
