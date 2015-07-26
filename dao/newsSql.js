// dao/userSqlMapping.js
// CRUD SQL语句
var news = {
    insert:'insert into news (typeid, uid, title, content) values (?, ?, ?, ?)',
    queryById: 'select newsid,news.title,users.uname,news.content from news,users where news.newsid=? and users.uid=news.uid',
    queryList: 'select newsid,title,uname,content from news,users where typeid=? and news.uid=users.uid order by newsid desc',
    comment: 'insert into comment(newsid, uid, content) values(?,?,?)',
    queryCommentList: 'select comment.content,users.uname from users,comment where comment.uid=users.uid and comment.newsid=?'
};

module.exports = news;