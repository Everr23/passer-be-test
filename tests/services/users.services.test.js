const users = require('../../services/users')

describe('users main functions', () => {

    // getUser function test
    test('getUser with {pk_user: 1}', async () => {
        const user = await users.getUser(1)
        expect(user.pk_user).toBe(1);
    });


    // createUser function test
    test('createUser with {pk_user: 5, name: "User test"}', async () => {
        const user = await users.createUser(5, "User test");
        expect(user.pk_user).toBe(5);
    });


    // updateUser function test (jest matching objects)
    test('updateUser with {pk_user: 1, name: "Update Test", false}', async () => {
        const dataToTest = {
            pk_user: 1, 
            name: "Update test", 
            status: false
        };
        const user = await users.updateUser(
            dataToTest.pk_user, 
            dataToTest.name, 
            dataToTest.status
        );
        expect(user).toMatchObject(dataToTest);
    });


    // deleteUser function test
    test('deleteUser with {pk_user: 1}', async () => {
        const user = await users.deleteUser(1);
        expect(user.pk_user).toBe(1);
    });
})