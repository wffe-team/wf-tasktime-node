'use strict';

import express from 'express'
import User from '../controller/user/user'
const router = express.Router()

router.get('/getUserList', User.getUserList);

export default router