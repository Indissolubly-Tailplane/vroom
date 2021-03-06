import React from 'react'
import {connect} from 'react-redux'
import Footer from './Footer'

const Home = ({isLoggedIn, name}) => {
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <center>
          <div className="homeContainer">
            <div className="overlay-desc">
              <center>
                <h2>Welcome {name}</h2>
                <a href="/cars/" className="stage-button">
                  Discover
                </a>
              </center>
            </div>
            <div className="featured">
              <img
                className="homeImageAlternate"
                src="https://images3.alphacoders.com/889/thumb-1920-889471.jpg"
              />
              <div className="featured">
                <div>
                  <h3>Authorized Supercar Reseller</h3>
                </div>
                <img
                  src="https://detailedsolutions.ca/wp-content/uploads/2014/10/Supercar-logo-compilation-banner.jpg"
                  width="75%"
                  height="auto"
                />
              </div>
              <video
                id="background-video"
                loop
                autoPlay="true"
                muted="true"
                width="100%"
                height="100%"
              >
                <source
                  src="http://content.jwplatform.com/videos/vyeEvNlI-W4hzf1vS.mp4"
                  type="video/mp4"
                />
                <source
                  src="http://content.jwplatform.com/videos/vyeEvNlI-W4hzf1vS.mp4"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Footer />
        </center>
      ) : (
        <center>
          <div className="homeContainer">
            <div className="overlay-desc">
              <center>
                <h2>Welcome To Vroom</h2>
                <a href="/cars/" className="stage-button">
                  Discover
                </a>
              </center>
            </div>
            <div className="featured">
              <img
                className="homeImageAlternate"
                src="https://images3.alphacoders.com/889/thumb-1920-889471.jpg"
              />
              <div className="featured">
                <div>
                  <h3>Authorized Supercar Reseller</h3>
                </div>
                <img
                  src="https://detailedsolutions.ca/wp-content/uploads/2014/10/Supercar-logo-compilation-banner.jpg"
                  width="75%"
                  height="auto"
                />
              </div>
              <video
                id="background-video"
                loop
                autoPlay="true"
                muted="true"
                width="100%"
                height="100%"
              >
                <source
                  src="http://content.jwplatform.com/videos/vyeEvNlI-W4hzf1vS.mp4"
                  type="video/mp4"
                />
                <source
                  src="http://content.jwplatform.com/videos/vyeEvNlI-W4hzf1vS.mp4"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Footer />
        </center>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.firstName
  }
}

export default connect(mapStateToProps, null)(Home)
