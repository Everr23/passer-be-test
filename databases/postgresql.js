const { newDb } = require('pg-mem');

const postgresql = newDb();

// Create mock data


// Create users table
postgresql.public.none(`
    create table users(
        pk_user integer,
        name    text, 
        status  boolean
    );

    insert into users values 
        (1, 'Juan', true),
        (2, 'Lucia', true);
`);


//Create transaction table
postgresql.public.none(`
    create table transactions(
        pk_transaction integer,
        fk_user        integer,
        description    text,
        amount         float
    );

    insert into transactions values 
        (1, 1, 'transaction descrip', 1000),
        (2, 2, 'transaction descrip', 2000),
        (3, 1, 'transaction descrip', 3000),
        (4, 2, 'transaction descrip', 4000),
        (5, 1, 'transaction descrip', 5000),
        (6, 2, 'transaction descrip', 6000);
`);


module.exports = {
    postgresql
}