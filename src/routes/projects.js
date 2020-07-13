import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProject, deleteProject } from '../controllers/project.controller'
// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);
// /api/projects/:projectID
router.get('/:id', getProject)
router.delete('/:id', deleteProject)




export default router;