// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="about-home-container">
              <Navbar />
              <div className="about-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="about-image"
                  alt="about"
                />
                <h1 className="about-heading-light">About</h1>
              </div>
            </div>
          ) : (
            <div className="about-home-container">
              <Navbar />
              <div className="about-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="about-image"
                  alt="about"
                />
                <h1 className="about-heading-dark">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
