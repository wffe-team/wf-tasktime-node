'use strict';

import mongoose from 'mongoose'
import userData from '../../initdata/user'

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	userId : String,
	account : String,
	password : String,
	realName : String,
	projectIds : String
});
//projectSchema.index({projectId: 1});

const UserModel = mongoose.model('users', userSchema);

UserModel.findOne((err,data)=>{
	if(!data){
		userData.forEach(item=>{
			UserModel.create(item);
		});
	}
})

export default UserModel
