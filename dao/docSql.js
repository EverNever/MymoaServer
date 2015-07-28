var doc = {
	addDoc: 'insert into doc (uid, title, content, altertime) values (?,?,?,?)',
	editDoc: 'update doc set content = ?, altertime = ? where docid = ?',
	delDoc: 'delete from doc where docid = ?',
	queryDocList: 'select docid,title from doc',
	queryDocContent: 'select docid,uname,title,content,altertime from doc,users where doc.docid=? and doc.uid=users.uid',
	searchDoc: 'select docid,title from doc where title like '
};

module.exports = doc;