const { postgresql } = require('../databases/postgresql')

/**
 * Get an especific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1234.56}}
 */
const getTransaction = (pk_transaction) => {

    let transaction = postgresql.public.one(`
        select * 
        from transactions
        where pk_transaction = ${pk_transaction}`
    );
    return transaction
}

/**
 * Create an transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1234.56}}
 */
const createTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = postgresql.public.one(`
            insert into transactions 
            values (
                ${pk_transaction}, 
                ${fk_user}, 
                '${description}', 
                ${amount}) 
            returning *;`
        );
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
* Update an specific transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction description", amount: 1234.56}}
 */
const updateTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        const transaction = postgresql.public.one(`
            update transactions set 
                pk_transaction = ${pk_transaction},
                fk_user = ${fk_user}, 
                description = '${description}', 
                amount = ${amount} 
            where pk_transaction = ${pk_transaction}
            returning *;`
        );
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    getTransaction,
    createTransaction,
    updateTransaction
}