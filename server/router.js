import {Router} from "express";
import PostController from "./controllers/postController.js";

const router = new Router()

router.post('/post', PostController.create)
router.get('/post', PostController.getAll)
router.get('/post/:id', PostController.getById)
router.delete('/post/:id', PostController.delete)

export default router