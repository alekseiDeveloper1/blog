import Post from "../models/post.js";

class PostController {
    async create(req, res) {
        try {
            const {title, desc, rating, img} = req.body
            const post = await Post.create({title, desc, rating, img})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async getAll(req, res) {
        try {
            const post = await Post.find()
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getById(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.status(400).json({message: 'id not found'})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.status(400).json({message: 'id not found'})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()