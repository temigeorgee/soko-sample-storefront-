import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Product = ({ name, price, media,onAddToCart,id }) => {
  return (
    <div className="container">
      <div className="cart-body">
        <div className="cart-image">
          <img src={media} alt="" />
        </div>
        <div className="cart-info">
          <p className="text">{name}</p>
          <p>Price:{price}</p>
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