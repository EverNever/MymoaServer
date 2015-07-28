
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./docSql');

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
    addDoc: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.body;
            console.log(param);
            connection.query($sql.addDoc,[param.uid, param.title, param.content, param.altertime], function(err, result) {
                console.log(err);
                console.log(result);
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加文档成功'
                    };    
                }
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接 
                connection.release();
            });
        });
    },
    editDoc: function(req, res, next) {
        pool.getConnection(function(err, connection){
            var param = req.body;
            connection.query($sql.editDoc,[param.content, param.altertime, param.docid], function(err, result){
                if(result) {
                    result = {
                        code: 200,
                        msg:'修改文档成功'
                    };    
                }
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    delDoc: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.body;
            connection.query($sql.delDoc, +param.docid, function(err, result){
                if(result) {
                    result = {
                        code: 200,
                        msg:'删除文档成功'
                    };    
                }
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryDocList: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryDocList, function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryDocContent: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryDocContent, param.docid, function(err, result){
                jsonWrite(res,result[0]);
                connection.release();
            });
        });
    },
    searchDoc: function(req,res,next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.searchDoc+'"%'+param.keyword+'%"',function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    }
};
