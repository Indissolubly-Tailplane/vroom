import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Image} from 'semantic-ui-react'
import Footer from './Footer'
import {fetchCart} from '../store/cart'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <center>
      <Image
        src="https://wallpaper-house.com/data/out/9/wallpaper2you_300629.jpg"
        verticalAlign="middle"
        centered
        className="ui fluid image"
      />
      <div className="loginForm">
        <form onSubmit={handleSubmit} name={name}>
          <div className="ui form segment">
            <div className="field">
              <label>Username</label>
              <div className="ui left labeled icon input">
                <input name="email" type="text" />
                <i className="user icon" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left labeled icon input">
                <input name="password" type="password" />
                <i className="lock icon" />
              </div>
            </div>
            <div />
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <a href="/auth/google">{displayName} with Google</a>
      </div>
      <Footer />
    </center>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch =  (dispatch) => {
  return {
    async handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      let loggedInUser = await dispatch(auth(email, password, formName))
      window.sessionStorage.clear()
      console.log('LOGGED IN USER: ', loggedInUser)
      dispatch(fetchCart(loggedInUser));

    }
  }
}



export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
