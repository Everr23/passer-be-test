const { newDb } = require('pg-mem');

const postgresql = newDb();

// Create mock data

// Create users table
postgresql.public.none(`
    create table users(
        pk_user integer,
        name text, 
        status boolean
    );

    insert into users values (
        1, 
        'Juan',
        true
    );
`);

//Create transaction table
postgresql.public.none(`
    create table transactions(
        pk_transaction integer,
        fk_user integer,
        description text,
        amount float
    );

    insert into transactions values (
        1, 
        1,
        'transaction test',
        1234.56
    );
`);



module.exports = {
    postgresql
}