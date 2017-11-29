'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const workLogSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        member: String,
        memberId: String,
        projectInfo: String,
        dateRange: '',
        workDays: Number,
        type:String       
    }
);
//projectSchema.index({projectId: 1});

const WorkLogModel = mongoose.model('worklogs', workLogSchema);

export default WorkLogModel
