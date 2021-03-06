import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup} from './components'
import Home from './components/Home'
import {me} from './store'
import cars from './components/cars'
import cart from './components/cart'
import CarCard from './components/CarCard'
import Confirmation from './components/confirmation'
import Checkout from './components/Checkout'
import UserProfile from './components/userProfile'
import GuestProfile from './components/guestProfile'
import Users from './components/Users'
import UserCard from './components/UserCard'
import AdminAllOrders from './components/AdminAllOrders'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cars/:id" component={CarCard} />
        <Route exact path="/cars" component={cars} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserCard} />
        <Route exact path="/cart" component={cart} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/adminAllOrders" component={AdminAllOrders} />
        <Route
          exact
          path="/userProfile"
          render={() => <UserProfile user={this.props} />}
        />
        <Route exact path="/guestProfile" component={GuestProfile} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={Home} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
