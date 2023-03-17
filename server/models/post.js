import mongoose from "mongoose";
const Post = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    rating: {type: Number, required: true},
    img: {type: String, required: true},
})

export default mongoose.model('post', Post)