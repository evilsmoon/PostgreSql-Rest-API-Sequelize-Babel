import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProject } from '../controllers/project.controller'
// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);
// /api/projects/:projectID
router.get('/:id', getProject)



export default router;