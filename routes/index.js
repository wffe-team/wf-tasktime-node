'use strict';

import project from './project'
import user from './user'
import department from './department'
import worklog from './worklog'

export default app => {
	app.use('/api/project', project);
	app.use('/api/user', user);
	app.use('/api/department', department);
	app.use('/api/worklog', worklog);
}