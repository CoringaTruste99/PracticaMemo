const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: 3308,
    user: 'ALAN',
    password: '1234',
    database: 'fulldb',
});

module.exports = pool;