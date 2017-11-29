'use strict';

import express from 'express'
import Project from '../controller/project/project'
const router = express.Router()

router.post('/createProject', Project.createProject);
router.get('/getProject', Project.getProject);
router.delete('/delProject/:_id', Project.delProject);
router.put('/changeProject', Project.changeProject);

export default router