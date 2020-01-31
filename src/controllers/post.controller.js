// Models
import Post from '../models/Post';

export async function getPosts(req, res) {
    const posts = await Post.find();
    return res.json(posts);
};

export async function createPost(req, res) {
    const { title, description } = req.body;
    const newPost = { title, description };
    const post = new Post(newPost);
    await post.save();
    return res.json({
        message: 'Post Saved Successfully',
        post
    });
};

export async function getPost(req, res) {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
}

export async function deletePost(req, res) {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    return res.json({ message: 'Post Deleted' });
};

export async function updatePost(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Successfully updated',
        updatedPost
    });
}