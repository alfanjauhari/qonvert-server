import { Router } from 'express';
import HomeController from './api/v1/controller';

const router = Router();

router.get('/', HomeController.index);

export default router;
