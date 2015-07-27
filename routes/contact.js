var express = require('express');
var router = express.Router();

var contactDao = require('../dao/contactDao');

router.post('/addContact', function(req, res, next) {
    contactDao.addContact(req, res, next);
});

router.post('/delContact', function(req, res, next) {
    contactDao.delContact(req, res, next);
});

router.get('/queryContactList', function(req, res, next) {
    contactDao.queryContactList(req, res, next);
});

router.get('/queryContactContent', function(req, res, next) {
    contactDao.queryContactContent(req, res, next);
});


router.post('/addContactGroup', function(req, res, next) {
    contactDao.addContactGroup(req, res, next);
});

router.get('/queryGroupList', function(req, res, next) {
    contactDao.queryGroupList(req, res, next);
});

router.get('/queryGroupContactList', function(req, res, next) {
    contactDao.queryGroupContactList(req, res, next);
});

module.exports = router;
