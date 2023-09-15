// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="nav-body-section">
              <h1 className="nav-body-title">Left Navbar Menu</h1>
              <ul className="left-nav-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="nav-body-section">
              <h1 className="nav-body-title">Content</h1>
              <p className="left-nav-items">
                Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                euusmd tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="nav-body-section">
              <h1 className="nav-body-title">right Navbar Menu</h1>
              <div className="left-nav-items">
                <p className="nav-item">Ad 1</p>
                <p className="nav-item">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
