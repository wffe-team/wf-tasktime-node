'use strict';

import UserModel from '../../models/user/user';
import BaseComponent from '../../prototype/baseComponent';

class User extends BaseComponent {
	constructor(){
		super()
		//this.createProject = this.createProject.bind(this)
	}
	async getUserList(req,res,next){
		try{
			const userList = await UserModel.find({});
			res.send({
				status: 1,
				data: userList,
			})
		}catch(err){
			res.send({
				status: 0,
				data: '查询失败'
			})
		}
	}
}

export default new User()