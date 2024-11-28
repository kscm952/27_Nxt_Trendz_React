// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
      <div>
        <div className="large-device-menu-items">
          <ul className="nav-menu-items">
            <Link to="/" className="nav-link">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/products" className="nav-link">
              <li className="nav-item">Products</li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li className="nav-item">Cart</li>
            </Link>
            <div className="logout-desktop-btn">
              <button type="button" className="button">
                Logout
              </button>
            </div>
          </ul>
        </div>
        <div className="logout-mobile-btn">
          <button type="button" className="button-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-icon"
            />
          </button>
        </div>
      </div>
    </div>
    <div className="small-device-menu-items">
      <ul className="nav-menu-items">
        <Link to="/" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-icon"
            />
          </li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-icon"
            />
          </li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-icon"
            />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
