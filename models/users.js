const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan", status: true}}
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = ${pk_user}`);
    return user
}

/**
 * Create an user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan", status: true}}
 */
const createUser = (pk_user, name, status = true) => {
    try {
        let user = postgresql.public.one(`insert into users values (${pk_user}, '${name}', ${status}) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: 1, name: "Juan", status: true}}
 */
const updateUser = (pk_user, name, status) => {
    try {
        const user = postgresql.public.one(`update users set name = '${name}', status = ${status} where pk_user = ${pk_user} returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {
    try {
        const user = postgresql.public.one(`delete from users where pk_user = ${pk_user} returning *;`);
        return { pk_user: user.pk_user }
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}