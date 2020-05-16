import { Router } from 'express';
import { getProject } from '../data/project';

const router = Router();

router.get('/project/:projectId', async (req, res) => {
  res.send(
    await getProject(req.params.projectId)
      .then(data => data.Item)
      .catch(err => err),
  );
});

export default router;
