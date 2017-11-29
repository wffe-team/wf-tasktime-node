'use strict';

import express from 'express'
import Worklog from '../controller/worklog/worklog'
const router = express.Router()

router.post('/createWorkLog', Worklog.createWorkLog);
router.get('/getWorkLog', Worklog.getWorkLog);

export default router