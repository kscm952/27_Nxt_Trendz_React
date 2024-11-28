// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-route-container">
    <Header />
    <div className="home-container">
      <div className="home-route-contents">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <div className="small-device">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="small-device-image"
          />
        </div>
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="button-container">
          <button type="button" className="shop-button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="large-device">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="large-device-image"
        />
      </div>
    </div>
  </div>
)

export default Home
