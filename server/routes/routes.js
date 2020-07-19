import express from 'express';
import { validateMessageData } from '../middleware/validate';
import sendMessage from '../controllers/controller';

const router = express.Router();
router.post('/v1/message', validateMessageData, sendMessage);

export default router;
