'use strict';

import mongoose from 'mongoose'
import departmentData from '../../initdata/department'

const Schema = mongoose.Schema;

var departmentSchema = new mongoose.Schema(
    {
        departmentName: String,
        projectFirstName: String,
        projectSecondName: String,
    }
);
//projectSchema.index({projectId: 1});

const DepartmentModel = mongoose.model('departments', departmentSchema);
DepartmentModel.findOne((err,data)=>{
	if(!data){
		departmentData.forEach(item=>{
			DepartmentModel.create(item);
		})
	}
})

export default DepartmentModel
