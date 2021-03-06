import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'
import CartNumber from './cartNumber'
import {postCartToDb} from '../store/cart'

const Navbar = ({handleClick, isLoggedIn, UpdateCart, isAdmin, userId}) => (
  <React.Fragment>
    <Menu>
      <Menu.Item>
        <Link to="/">
          <i className="home icon" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Cars">Cars</Link>
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Item>
          <Link to="/UserProfile">Profile</Link>
        </Menu.Item>
      ) : (
        <Menu.Item>
          <Link to="/GuestProfile">Profile</Link>
        </Menu.Item>
      )}
      {isAdmin ? (
        <Menu.Item>
          <Link to="/AdminAllOrders">All Orders</Link>
        </Menu.Item>
      ) : null}
      {isAdmin ? (
        <Menu.Item>
          <Link to="/Users">All Users</Link>
        </Menu.Item>
      ) : null}
      <div className="right menu">
        <Menu.Item>
          <Link to="/Signup">Sign Up</Link>
        </Menu.Item>
        {!isLoggedIn ? (
          <Menu.Item>
            <Link to="/Login">Login</Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <a onClick={() => {
              console.log('ON CLICK RAN')
              handleClick()
              UpdateCart(userId)
            }}
            >
            Logout
            </a>
          </Menu.Item>
        )}
        <Menu.Item>
          <Link to="/Cart">
            <i className="shopping cart icon" />
            <CartNumber />
          </Link>
        </Menu.Item>
      </div>
    </Menu>
  </React.Fragment>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.adminStatus,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    UpdateCart(userId) {
      dispatch(postCartToDb(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
