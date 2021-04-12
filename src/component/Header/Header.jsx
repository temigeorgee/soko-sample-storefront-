import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faTruck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = ({ totalItems }) => {
  return (
    <div className="container">
      <div className="main-header">
          <div className="col-6-header">
            <div className="market">
              <div className="shopping-house">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="fa"
                  style={{ color: '#AFAFAF' }}
                />
              </div>
              <div className="header-text">
              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <h3>Target</h3>
              </Link>
                <p> Charm Towers, plot 12, Nkruma Rd, Kampala,Ug</p>
              </div>
            </div>
          </div>
        <div className="main-bagxacc">
          <div className="shopping-wrapper">
            <div className="col-3">
              <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                <div className="market">
                  <button type="button" className="btn-bag">
                    <div className="shopping-bag">
                      <FontAwesomeIcon
                        icon={faShoppingBag}
                        className="fa"
                        style={{ color: '#AFAFAF', fontSize: '1rem' }}
                      />
                      <small>{totalItems}</small>
                    </div>
                    <div className="header-text1">
                      <h3>Bag</h3>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-3">
              <div className="market">
                <button type="submit" className="btn-account">
                  <div className="shopping-bag">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="fa"
                      style={{ color: '#AFAFAF', fontSize: '1rem' }}
                    />
                  </div>
                  <div className="header-text2">
                    <h3>Account</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
