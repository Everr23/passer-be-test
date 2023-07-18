const transactionsModel = require('../models/transactions')

/**
 * Create an transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1234.56}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createTransaction
}