var express = require('express');
var router = express.Router();

var newsDao = require('../dao/mailDao');

// 增加用户
//TODO 同时支持get,post
router.post('/sendMail', function(req, res, next) {
    newsDao.sendMail(req, res, next);
});


router.get('/queryMailList', function(req, res, next) {
    newsDao.queryMailList(req, res, next);
});

router.get('/queryMailContent', function(req, res, next) {
    newsDao.queryMailContent(req, res, next);
});

module.exports = router;

