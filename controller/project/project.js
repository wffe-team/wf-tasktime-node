'use strict';

import ProjectModel from '../../models/project/project';
import BaseComponent from '../../prototype/baseComponent';
import dtime from 'time-formater';
import formidable from 'formidable'

class Project extends BaseComponent {
	constructor(){
		super()
		//this.createProject = this.createProject.bind(this)
	}
	async createProject(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			console.log(fields);
			try{
			    const newProject = new ProjectModel({
			        projectName : fields.projectName,
			        describe : fields.describe,
			        time: 0,
			    });
				await ProjectModel.create(newProject)
				res.send({
					status: 1,
					data: '创建项目成功',
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
	async getProject(req,res,next){
		try{
			const projectList = await ProjectModel.find({});
			res.send({
				status: 1,
				data: projectList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
	async delProject(req,res,next){
		try{
			await ProjectModel.remove({
		        _id : req.params._id
		    });
			res.send({
				status: 1,
				data: '删除项目成功',
			})
		}catch(err){
			res.send({
				status: 0,
				data: '删除失败'
			})
		}
	}
	async changeProject(req,res,next){
		try{
			let _id = req.body._id;
			let changeProject = {
				projectName : req.body.projectName,
				describe : req.body.describe
			};
			await ProjectModel.findOneAndUpdate({_id}, {$set:changeProject});
			res.send({
				status: 1,
				data: '修改项目成功',
			})
		}catch(err){
			res.send({
				status: 0,
				data: '修改失败'
			})
		}
	}
}

export default new Project()