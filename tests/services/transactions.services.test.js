const transactions = require('../../services/transactions')

describe('transactions main functions', () => {

    // getTransaction function test
    test('getTransaction with {pk_transaction: 1}', async () => {
        const transaction = await transactions.getTransaction(1)
        expect(transaction.pk_transaction).toBe(1);
    });


    // getTransactionsByUser function test (jest matching objects in array)
    test('getTransactionsByUser with {fk_user: 1}', async () => {
        const transactionsList = await transactions.getTransactionsByUser(1)
        expect(transactionsList).toEqual(
            expect.arrayContaining([     
                expect.objectContaining({   
                    fk_user: 1               
                })
            ])
        )
    });


    // createTransaction function test
    test('createTransaction with {pk_transaction: 5, fk_user: 1, description: "Test create transaction", amount: 1000}', async () => {
        const transaction = await transactions.createTransaction(5, 1, "Test create transaction", 1000);  
        expect(transaction.pk_transaction).toBe(5);
    });


    // updateTransaction function test (jest matching objects)
    test('updateTransaction with {pk_transaction: 5, fk_user: 1, description: "Test update transaction", amount: 1000}', async () => {
        const dataToTest = {
            pk_transaction: 1,
            fk_user: 1, 
            description: "Test update transaction", 
            amount: 1000
        };
        const transaction = await transactions.updateTransaction(
            dataToTest.pk_transaction, 
            dataToTest.fk_user, 
            dataToTest.description, 
            dataToTest.amount
        );
        expect(transaction).toMatchObject(dataToTest);
    });
})