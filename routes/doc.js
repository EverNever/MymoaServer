var express = require('express');
var router = express.Router();

var postDao = require('../dao/docDao');

router.post('/addDoc', function(req, res, next) {
    postDao.addDoc(req, res, next);
});

router.post('/editDoc', function(req, res, next) {
    postDao.editDoc(req, res, next);
});

router.post('/delDoc', function(req, res, next) {
    postDao.delDoc(req, res, next);
});

router.get('/queryDocList', function(req, res, next) {
    postDao.queryDocList(req, res, next);
});

router.get('/queryDocContent', function(req, res, next) {
    postDao.queryDocContent(req, res, next);
});

router.get('/searchDoc', function(req, res, next) {
    postDao.searchDoc(req, res, next);
});

module.exports = router;
