'use strict';

import mongoose from 'mongoose'

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

export default DepartmentModel
