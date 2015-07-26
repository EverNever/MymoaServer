var express = require('express');
var router = express.Router();

var postDao = require('../dao/postDao');

router.post('/addPost', function(req, res, next) {
    postDao.addPost(req, res, next);
});

router.get('/queryPostList', function(req, res, next) {
    postDao.queryPostList(req, res, next);
});

router.get('/queryPostContent', function(req, res, next) {
    postDao.queryPostContent(req, res, next);
});

module.exports = router;

