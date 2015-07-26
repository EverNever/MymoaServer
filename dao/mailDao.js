
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./mailSql');

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
    sendMail: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;

            connection.query($sql.sendMail, [param.fromuid, param.touid, param.time, param.content], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'发送成功'
                    };    
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接 
                connection.release();
            });
        });
    },
    queryMailList: function(req, res, next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryMailList, [param.uid,param.uid], function(err, result){
                jsonWrite(res,result);
                connection.release();
            });
        });
    },
    queryMailContent: function(req, res, next) {
        pool.getConnection(function(err, connection){
            var param = req.query || req.params;
            connection.query($sql.queryMailContent, param.mailid, function(err, result){
                jsonWrite(res,result[0]);
                connection.release();
            });
        });
    }
};
