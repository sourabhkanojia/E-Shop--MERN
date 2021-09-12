import express from 'express';
const router = express.Router();
import { authUser, gethUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, gethUserProfile);

export default router;