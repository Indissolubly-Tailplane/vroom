const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  carId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Cart
