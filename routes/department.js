'use strict';

import express from 'express'
import Department from '../controller/department/department'
const router = express.Router()

router.post('createDepartment', Department.createDepartment);
router.get('/getDepartment', Department.getDepartment);
router.get('/getProjectFirst', Department.getProjectFirst);
router.get('/getProjectSecond', Department.getProjectSecond);
router.get('/departmentRelationList', Department.departmentRelationList);

export default router