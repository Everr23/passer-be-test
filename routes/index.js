const express = require('express')

const { users } = require('../controllers')
const { transactions } = require('../controllers')

const router = express.Router()

//users routes
router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser)
    .delete('/users/:pk_user', users.deleteUser)

//transactions routes
router.post('/transactions/', transactions.createTransaction)

module.exports = router