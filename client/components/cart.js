import SingleCarCartRevised from './singleCarCartRevised'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {updateTotal} from '../store/car'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: 0,
      canCheckout: true
    }
    this.handleRemoveInCart = this.handleRemoveInCart.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  componentDidMount() {
    this.setState({cartItems: window.sessionStorage.length})
    this.calculateTotal();
  }

  handleRemoveInCart = evt => {
    this.setState({
      cartItems: this.state.cartItems - 1
    })
  }

  calculateTotal = () => {
    let totalPrice = 0
    let cars = Object.entries(window.sessionStorage).map(car =>
      JSON.parse(car[1])
    )
    for (let i = 0; i < cars.length; i++) {
      totalPrice += cars[i].price
    }
    this.props.updateTotal(totalPrice)
  }

  parseStore = () => {
    let cars = Object.entries(window.sessionStorage).map(
      car => JSON.parse(car[1]).id
    )
    return new Set(cars).size !== cars.length
  }

  render() {
    const canCheckout = this.parseStore()
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    if (this.state.cartItems === 0) {
      return (
        <center>
          <h1>Cart is empty!</h1>
        </center>
      )
    } else {
      return (
        <div>
          <center>
            <h4>Cart</h4>
            <div id="cartContainer">
              <div className="ui items">
                {Object.entries(window.sessionStorage).map((item, idx) => (
                  <SingleCarCartRevised
                    key={idx}
                    car={JSON.parse(item[1])}
                    carKeyInlocalStorage={item[0]}
                    handleRemove={this.handleRemoveInCart}
                    totalPrice={this.props.cartTotal}
                    calculateTotal={this.calculateTotal}
                  />
                ))}
              </div>
            </div>
            <div id="checkoutContainer">
              <h1>Total Price: ${numberWithCommas(this.props.cartTotal)}</h1>
              {canCheckout === false ? (
                <Link to="/checkout" className="ui blue button">
                  Checkout
                </Link>
              ) : (
                <h3>
                  Sorry, Only One Car of the same model, please remove
                  duplicates
                </h3>
              )}
            </div>
          </center>
          <Footer />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  cartTotal: state.car.cartTotal
})

const mapDispatchToProps = dispatch => {
  return {
    updateTotal: total => {
      dispatch(updateTotal(total))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
