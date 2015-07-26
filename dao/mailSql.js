var mailSql = {
	sendMail: 'insert into mail (fromuid, touid, time, content) values (?, ?, ?, ?)',
	queryMailList: 'select mailid,fromuid,touid,time,content from mail where touid=? or fromuid=?',
	queryMailContent: 'select fromuid,touid,time,content from mail where mailid=?'
};

module.exports = mailSql;