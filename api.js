"use strict";
//const models = require('./db');
const express = require('express');
const router = express.Router();

// 获取项目列表
router.get('/api/project/getProject',(req,res) => {
	//console.log(req.body);
	//var model = req.body
	console.log(123123123123);
    // 通过模型去查找数据库
    // models.projects.find({},(err,data) => {
    //     if (err) {
    //         res.json(err);
    //         console.log(err);
    //     } else {
    //     	if(!!data){
    //     		//console.log(data);
    //     		res.json(data);
    //     	}else{
    //     		res.json('none');
    //     	}
    //     }
    // });
});
module.exports = router;