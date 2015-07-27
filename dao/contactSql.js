var contactSql = {
	addContact: 'insert into contact (uid, groupid) values (?, ?)',
	delContact: 'delete from contact where uid = ?',
	queryContactList: 'select uname, users.uid from contact, users where contact.uid = users.uid group by users.uid',
	queryContactContent: 'select uname, uid from users where users.uid = ?',

	addContactGroup: 'insert into contactgroup (groupname) values (?)',
	queryGroupList: 'select groupid, groupname from contactgroup',
	queryGroupContactList: 'select uname, users.uid from contact, users where contact.uid = users.uid and groupid = ?'
};

module.exports = contactSql;
