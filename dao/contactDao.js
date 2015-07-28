
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./contactSql');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: 1,
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    addContact: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;

            connection.query($sql.addContact, [+param.uid, +param.groupid], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加联系人成功'
                    };    
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    delContact: function(req, res, next) {
        pool.getConnection(function(err, connection){
            var param = req.body;
            connection.query($sql.delContact, +param.uid, function(err, result){
                if(result) {
                    result = {
                        code: 200,
                        msg:'删除联系人成功'
                    };    
                }
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryContactList: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryContactList, function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryContactContent: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryContactContent, param.uid, function(err, result){
                jsonWrite(res,result[0]);
                connection.release();
            });
        });
    },
    addContactGroup: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.body;

            connection.query($sql.addContactGroup, param.groupname, function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加联系人分组成功'
                    };    
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryGroupList: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryGroupList, function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryGroupContactList: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryGroupContactList, param.groupid, function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    }
};
