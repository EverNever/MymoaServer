// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert:'insert into users (uid, uname, password, issu) values (?, ?, ?, 0)',
    update:'update users set uname=? where uid=?',
    delete: 'delete from users where uid=?',
    queryById: 'select * from users where uid=?',
    queryAll: 'select * from users',
    login: 'select password from users where uid=?'
};

module.exports = user;