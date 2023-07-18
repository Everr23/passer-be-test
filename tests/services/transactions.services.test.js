const transactions = require('../../services/transactions')

describe('transactions main functions', () => {

    // createTransaction function test
    test('createTransaction with {pk_transaction: 5, fk_user: 1, description: "Test create transaction", amount: 9876.54}', async () => {
        let transaction = await transactions.createTransaction(5, 1, "Test create transaction", 9876.54);
        expect(transaction.pk_transaction).toBe(5);
    });

})