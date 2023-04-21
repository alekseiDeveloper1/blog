import Post from "../models/post.js";
import * as uuid from "uuid";

class PostController {
    async create(req, res) {
        try {
            const {title, desc} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv('./static/' + fileName)
            const post = await Post.create({title, desc, img: fileName})
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
