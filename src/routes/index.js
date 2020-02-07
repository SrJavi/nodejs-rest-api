import postRoutes from './post.router'
import authRoutes from './auth.router'

var express = require('express');
var router = express.Router();

// Routes
router.use('/api', postRoutes);
router.use('/', authRoutes);


module.exports = router