var express = require('express');
var router = express.Router();

var newsDao = require('../dao/newsDao');

// 增加用户
//TODO 同时支持get,post
router.post('/addNews', function(req, res, next) {
    newsDao.add(req, res, next);
});


router.get('/queryNewsList', function(req, res, next) {
    newsDao.queryList(req, res, next);
});

router.get('/queryContent', function(req, res, next) {
    newsDao.queryById(req, res, next);
});

router.get('/queryCommentList', function(req, res, next) {
    newsDao.queryCommentList(req, res, next);
});

router.post('/addComment', function(req,res, next){
    newsDao.comment(req, res, next);
});

module.exports = router;

