const transactionsModel = require('../models/transactions')


/**
 * Get a especific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1000}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionsModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
 * Get transactions by user
 * @param {number} fk_user User id
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1000}}
 */
const getTransactionsByUser = async (fk_user) => {
    try {
        return await transactionsModel.getTransactionsByUser(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
 * Create a transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1000}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


/**
* Update a transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1000}}
 */
const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    getTransaction,
    getTransactionsByUser,
    createTransaction,
    updateTransaction
}