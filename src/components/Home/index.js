// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="main-home-container">
              <Navbar />
              <div className="home-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="home-image"
                  alt="home"
                />
                <h1 className="home-heading-light">Home</h1>
              </div>
            </div>
          ) : (
            <div className="main-home-container">
              <Navbar />
              <div className="home-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="home-image"
                  alt="home"
                />
                <h1 className="home-heading-dark">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
