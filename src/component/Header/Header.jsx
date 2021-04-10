import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faTruck,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = ({totalItems}) => {
  return (
    <div className="container">
      <div className="main-header">
        <div className="row">
          <div className="col-6-header">
            <div className="market">
              <div className="shopping-house">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="fa"
                  style={{ color: "#AFAFAF" }}
                />
              </div>
              <div className="header-text">
                <h3>Target</h3>
                <p> Charm Towers, plot 12, Nkruma Rd, Kampala,Ug</p>
              </div>
            </div>
          </div>
          <div className="shopping-wrapper">
            <div className="col-3">
              <div className="market">
                <div className="shopping-bag">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="fa"
                    style={{ color: "#AFAFAF", fontSize: "1rem" }}
                  />
                  <small>{totalItems}</small>
                </div>
                <div className="header-text">
                  <h3>Bag</h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="market">
                <div className="shopping-bag">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="fa"
                    style={{ color: "#AFAFAF", fontSize: "1rem" }}
                  />
                </div>
                <div className="header-text">
                  <h3>Account</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
