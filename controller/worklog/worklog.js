'use strict';

import WorklogModel from '../../models/worklog/worklog';
import BaseComponent from '../../prototype/baseComponent';
import formidable from 'formidable'

class Worklog extends BaseComponent {
	constructor(){
		super()
		//this.createProject = this.createProject.bind(this)
	}
	async createWorkLog(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			console.log(fields);
			try{
			    const newWorkLog = new WorklogModel({
			        member : fields.member,
			        memberId : fields.memberId,
			        projectInfo : fields.projectInfo,
			        dateRange : fields.dateRange,
			        workDays : fields.workDays,
			        type : fields.type,
			    });
				await WorklogModel.create(newWorkLog)
				res.send({
					status: 1,
					data: '创建成功',
				})
			}catch(err){
				console.log('创建失败', err)
				res.send({
					status: 0,
					data: '创建失败'
				})
			}
		});
	}
	async getWorkLog(req,res,next){
		try{
			let query={};
			if(req.query.time){
				query.dateRange=req.query.time;
			}
			const workLogList = await WorklogModel.find(query);
			res.send({
				status: 1,
				data: workLogList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
}

export default new Worklog()