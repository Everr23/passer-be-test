const transactions = require('../../services/transactions')

describe('transactions main functions', () => {
    // getTransaction function test
    test('getTransaction with {pk_transaction: 1}', async () => {
        let transaction = await transactions.getTransaction(1)
        expect(transaction.pk_transaction).toBe(1);
    });

    // createTransaction function test
    test('createTransaction with {pk_transaction: 5, fk_user: 1, description: "Test create transaction", amount: 9876.54}', async () => {
        let transaction = await transactions.createTransaction(5, 1, "Test create transaction", 9876.54);
        expect(transaction.pk_transaction).toBe(5);
    });

})