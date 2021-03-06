import React from 'react'
import Footer from './Footer'
import {Link} from 'react-router-dom'

const Confirmation = () => (
      <div>
        <center>
          <h3>Your Order Is Being Processed and Will Be Shipped Shortly</h3>
          <h3>Thank You For Using Vroom</h3>
          <Link to="/UserProfile">
            <button className="ui purple button" type="button">
              View Order
                </button>
          </Link>
        </center>
        <div id="axis" className="one">
          <img
            height="auto"
            width="25%"
            className="object mclaren move-right"
            src="http://www.pngmart.com/files/4/Car-PNG-Picture.png"
          />
          <img
            height="auto"
            width="25%"
            className="object lambo move-left"
            src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10695.png"
          />
          <img
            height="auto"
            width="25%"
            className="object ferrari move-right"
            src="http://www.pngmart.com/files/4/Ferrari-Sergio-PNG-File.png"
          />
          <img
            height="auto"
            width="25%"
            className="object bugatti move-left"
            src="http://www.pngmart.com/files/4/Bugatti-PNG-Photos.png"
          />
          <Footer />
        </div>
      </div>
)

export default Confirmation;
