'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	userId : String,
	account : String,
	password : String,
	realName : String,
	time : Number,
	projectIds : String
});
//projectSchema.index({projectId: 1});

const UserModel = mongoose.model('users', userSchema);

export default UserModel
