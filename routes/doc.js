var express = require('express');
var router = express.Router();

var docDao = require('../dao/docDao');

router.post('/addDoc', function(req, res, next) {
    docDao.addDoc(req, res, next);
});

router.post('/editDoc', function(req, res, next) {
    docDao.editDoc(req, res, next);
});

router.post('/delDoc', function(req, res, next) {
    docDao.delDoc(req, res, next);
});

router.get('/queryDocList', function(req, res, next) {
    docDao.queryDocList(req, res, next);
});

router.get('/queryDocContent', function(req, res, next) {
    docDao.queryDocContent(req, res, next);
});

router.get('/searchDoc', function(req, res, next) {
    docDao.searchDoc(req, res, next);
});

module.exports = router;
