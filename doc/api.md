#API文档#

#无特殊说明全为GET方式#

##1.users##
/api/users

###1.addUser###
method:
POST

params:

* phone
* name
* password

return:

{
    code: 200,
    msg:'增加成功'
}

{
   code: 1,
   msg: '操作失败'
}

###2.login###
method:
POST

params:

* phone
* password

return:

{
      code: 200,
      msg:'登录成功'
}

{
   code: 1,
   msg: '操作失败'
}

###3.query###

params:

* id  同用户手机号

return:

{
"uid": "18888888888",
"uname": "han",
"password": "123",
"issu": 1,
"phonenum": "18888888888",
"email": "abc@mymoa.com"
}

{
"code": 1,
"msg": "操作失败"
}

##2.news##
/api/news

###1.addNews###
method:
POST

params:

* typeid	类别的ID

* uid		发布新闻的人的ID

* title       标题

* content	内容

return:

{
  "code": 200,
  "msg": "增加新闻成功"
}

{
"code": 1,
"msg": "操作失败"
}

###2.addComment###

method:
POST

params:

* newsid 	新闻ID
* uid		发表评论的人的ID
* content  	评论内容

return:

{
  "code": 200,
  "msg": "评论成功"
}

{
"code": 1,
"msg": "操作失败"
}

###3.queryCommentList###

params:

* newsid 	新闻ID

return:

[
  {
    "content": "hahahahhaha",
    "uname": "han"
  },
  {
    "content": "hello",
    "uname": "han"
  }
]

{
"code": 1,
"msg": "操作失败"
}

###4.queryContent###

params:

* newsid 	新闻ID

return:

{
  "title": "第二条",
  "content": "hahahahhaha",
  "uname": "han"
}

{
"code": 1,
"msg": "操作失败"
}

###5.queryList###

params:

* typeid 	类别ID

return:

[
  {
    "newsid": 2,
    "typeid": 1,
    "uid": "123",
    "title": "第二条",
    "content": "hahahahhaha"
  },
  {
    "newsid": 1,
    "typeid": 1,
    "uid": "123",
    "title": "放假了",
    "content": "我也在本周的佛法的发放"
  }
]

{
"code": 1,
"msg": "操作失败"
}

##3.post##

###1.addPost

###2.queryPostList

###3.queryPostContent



##4.doc##

###1.addDoc###

###2.editDoc###

###3.delDoc###

###4.queryDocList

###5.queryDocContent





##5.contact##

###1.addContact###

###2.delContact

###3.queryContactList

###4.queryContactContent

###5.addContactGroup

###6.queryGroupList

###7.queryGroupContactList




##6.mail##

###1.sendMail###

###2.queryMailList###

###3.queryMailContent###

