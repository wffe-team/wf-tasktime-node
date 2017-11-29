'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
    projectId : String,
    projectName : String,
    time : Number,
    describe : String
});
//projectSchema.index({projectId: 1});

const ProjectModel = mongoose.model('projects', projectSchema);

export default ProjectModel
