import express from 'express'
import fileUpload from  'express-fileupload'
import router from "./router.js";
import mongoose from "mongoose";

const app = express()
const PORT = 5000
const url_DB = 'mongodb://localhost:27017'

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(url_DB)
        app.listen(PORT, () => console.log(`Server PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()