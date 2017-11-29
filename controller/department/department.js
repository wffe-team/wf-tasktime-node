'use strict';

import DepartmentModel from '../../models/department/department';
import BaseComponent from '../../prototype/baseComponent';

class Department extends BaseComponent {
	constructor(){
		super()
		//this.createProject = this.createProject.bind(this)
	}
	async createDepartment(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			try{
			    const newDepartment = new DepartmentModel({
			        departmentName : fields.departmentName,
			        projectFirstName : fields.projectFirstName,
			        projectSecondName: fields.projectSecondName,
			    });
				await DepartmentModel.create(newDepartment)
				res.send({
					status: 1,
					data: '创建成功',
				})
			}catch(err){
				res.send({
					status: 0,
					data: '创建失败'
				})
			}
		});
	}
	async getDepartment(req,res,next){
		try{
			const departmentList = await DepartmentModel.distinct('departmentName');
			res.send({
				status: 1,
				data: departmentList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
	async getProjectFirst(req,res,next){
    	const department = req.query.department;
		try{
			let query={
				departmentName:department,
		    	projectFirstName:{
		    		$ne:''
		    	}
			};
			const departmentList = await DepartmentModel.distinct('projectFirstName', query);
			res.send({
				status: 1,
				data: departmentList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
	async getProjectSecond(req,res,next){
    	const department = req.query.department;
	    const projectFirstName = req.query.projectFirstName;
	    let query={};
		try{
			if(department&&projectFirstName){
		    	query={
			    	departmentName:department,
			    	projectFirstName:projectFirstName,
			    	projectSecondName:{
			    		$ne:''
			    	}
			    }
		    }else{
		    	query={
			    	projectSecondName:{
			    		$ne:''
			    	}
			    }
		    }
			const departmentList = await DepartmentModel.distinct('projectSecondName', query);
			res.send({
				status: 1,
				data: departmentList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
	async departmentRelationList(req,res,next){
		try{
			let departmentList=[];
			let departmentNameList=[];
			let projectFirstNameList=[];
			let projectSecondNameList=[];
			let query={}; 

			departmentNameList = await DepartmentModel.distinct('departmentName');
			departmentNameList.forEach(item=>{
    			departmentList.push({
    				departmentName:item,
    				childProjects:[]
    			})
    		});
    		departmentList.forEach(async item=>{
    			query={
			    	departmentName:item.departmentName,
			    	projectFirstName:{
			    		$ne:''
			    	}
    			};
    			projectFirstNameList=await DepartmentModel.distinct('projectFirstName',query);
    			projectFirstNameList.forEach(items=>{
        			item.childProjects.push({
        				projectFirstName:items,
        				childProjects:[]
        			})
        		});
        		item.childProjects.forEach(async items=>{
	    			models.projectInfos.distinct('projectSecondName',{
				    	departmentName:item.departmentName,
				    	projectFirstName:items.projectFirstName,
				    	projectSecondName:{
				    		$ne:''
				    	}
				    })
				    query={
				    	departmentName:item.departmentName,
				    	projectFirstName:items.projectFirstName,
				    	projectSecondName:{
				    		$ne:''
				    	}
	    			};
				    projectSecondNameList=await DepartmentModel.distinct('projectSecondName',query);
				    projectSecondNameList.forEach(itemss=>{
				    	items.childProjects.push({
	        				projectSecondName:itemss,
	        			})
				    });
			    })
    		});
			res.send({
				status: 1,
				data: departmentList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
}

export default new Department()