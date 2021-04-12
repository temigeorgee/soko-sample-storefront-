import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = ({ name, price, media,onAddToCart,id }) => {
  return (
    <div className="container">
      <div className="cart-body">
          <Link to={`/product-details/${id}`} style={{ textDecoration: 'none' }}>
        <div className="cart-image">
          <img src={media} alt="" className="product-img" />
          <h3 className="product-view">view</h3>
        </div>
          </Link>
        <div className="cart-info">
          <p className="text">{name}</p>
          <p className="price">{price}</p>
        </div>
        <div className="btn">
          <button type="submit" className="btn-add" onClick={()=> onAddToCart(id,1)}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: ".5rem" }} />
            add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
