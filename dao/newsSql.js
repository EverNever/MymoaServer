// dao/userSqlMapping.js
// CRUD SQL语句
var news = {
    insert:'insert into news (typeid, uid, title, content) values (?, ?, ?, ?)',
    queryById: 'select news.title,news.content,users.uname from news,users where news.newsid=? and users.uid=news.uid',
    queryList: 'select * from news where typeid=? order by newsid desc',
    comment: 'insert into comment(newsid, uid, content) values(?,?,?)',
    queryCommentList: 'select comment.content,users.uname from users,comment where comment.uid=users.uid and comment.newsid=?'
};

module.exports = news;