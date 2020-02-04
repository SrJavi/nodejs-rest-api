import { Router } from 'express'
const router = Router();

const AuthToken = require('../middleware/AuthToken')
import { signup, signin, me } from '../controllers/auth.controller'

// routes
router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/me').get(AuthToken, me);

export default router;