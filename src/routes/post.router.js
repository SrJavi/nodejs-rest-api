import { Router } from 'express'
const router = Router();

import { getPosts, createPost, deletePost, getPost, updatePost } from '../controllers/post.controller'

// routes
router.route('/posts')
    .get(getPosts)
    .post(createPost);

router.route('/posts/:id')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;