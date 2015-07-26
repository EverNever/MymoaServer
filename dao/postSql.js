var post = {
	addPost:'insert into post (uid, title, starttime, endtime, contemt) values (?, ?, ?, ?, ?)',
	queryPostList:'select postid, uname, title, starttime, endtime from post,users where post.uid=users.uid order by endtime desc limit 5',
	queryPostContent:'select postid,title,users.uname,contemt,starttime,endtime from users,post where post.postid=? and post.uid=users.uid'
};

module.exports = post;